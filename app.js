// Helper
const $ = (id) => document.getElementById(id);

// Views
const topbar = $("topbar");
const playerView = $("playerView");
const quizView = $("quizView");
const resultView = $("resultView");

// Start screen
const playersEl = $("players");
const startBtn = $("startBtn");

// Quiz UI
const youImg = $("youImg");
const youName = $("youName");
const statQ = $("statQ");
const statGood = $("statGood");
const statBad = $("statBad");

const qNr = $("qNr");
const qText = $("qText");
const imgWrap = $("imgWrap");
const answersEl = $("answers");

const feedbackBox = $("feedbackBox");
const feedbackHead = $("feedbackHead");
const feedbackBody = $("feedbackBody");

const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");

// Result UI
const resultSummary = $("resultSummary");
const othersEnd = $("othersEnd");
const playAgainBtn = $("playAgainBtn");

const printPdfBtn = $("printPdfBtn");
const reviewList = $("reviewList");

// Diploma UI
const diplomaName = $("diplomaName");
const dScore = $("dScore");
const dTotal = $("dTotal");
const dPct = $("dPct");
const dDate = $("dDate");

// ====== CONFIG: wachttijd ======
// altijd minimaal 15s per vraag
const BASE_QUESTION_MS = 15000;
// tot 15s extra als iemand supersnel is (dus max 30s totaal)
const MAX_EXTRA_MS = 15000;

let lockInterval = null;

// ====== DATA: spelers ======
const PLAYERS = [
  { name: "Kaj", img: "kaj.jpg" },
  { name: "Luuk", img: "luuk.jpg" },
  { name: "Kaj & Luuk", img: "kaj-luuk.jpg" },
  { name: "Ferran", img: "ferran.jpg" },
  { name: "Carmen", img: "carmen.jpg" },
  { name: "Richard", img: "richard.jpg" },
  { name: "Ilonka", img: "ilonka.jpg" }
];

// ====== DATA: vragen ======
// Pas deze aan zoals jij wil. image is optioneel. explain is optioneel.
const QUESTIONS = [
  {
    text: "Wat is dit?",
    image: "images/fidget.png",
    answers: ["Fidget spinner", "Slinky", "Voetbal", "Draaiketting"],
    correctIndex: 0,
    explain: "Fidget spinners waren rond 2017 mega populair als ‘fidget toy’."
  },
  {
    text: "Wat is dit?",
    image: "images/tamagotchi.png",
    answers: ["Tamagotchi", "GameBoy", "Pager", "iPod Shuffle"],
    correctIndex: 0,
    explain: "Een Tamagotchi is een digitaal huisdiertje dat je moest voeren en verzorgen."
  },
  {
    text: "Wat is dit?",
    image: "images/neopets.png",
    answers: ["Neopets", "Club Penguin", "Habbo", "RuneScape"],
    correctIndex: 0,
    explain: "Neopets is een online game/community met virtuele beestjes (eind jaren 90/2000s)."
  },
  {
    text: "Waarom zeggen we ‘Oh dennenboom’, terwijl het vaak een spar is?",
    image: "",
    answers: ["Omdat ‘den’ vroeger breder werd gebruikt", "Omdat sparren niet bestaan", "Omdat het een grap is", "Omdat het uit Amerika komt"],
    correctIndex: 0,
    explain: "In oude taal werd ‘den’ soms als verzamelnaam gebruikt; kerstbomen zijn vaak sparren (zoals Nordmann)."
  }
];

// ====== STATE ======
let selectedPlayerIndex = null;
let selectedPlayerName = null;
let idx = 0;

// per vraag: { startedAt, answered, correct, selectedIndex, answeredAt, unlockAt }
let state = QUESTIONS.map(() => ({}));

// ====== UTIL ======
function show(view){
  [playerView, quizView, resultView].forEach(v => v.classList.remove("active"));
  view.classList.add("active");
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function clearLockInterval(){
  if(lockInterval){
    clearInterval(lockInterval);
    lockInterval = null;
  }
}

function setNextButtonCountdown(msLeft){
  if(msLeft <= 0){
    nextBtn.textContent = "VOLGENDE";
    return;
  }
  const sec = Math.ceil(msLeft / 1000);
  nextBtn.textContent = `VOLGENDE (${sec}s)`;
}

function requiredTimeForQuestion(elapsedMs){
  // Hoe sneller je antwoordt, hoe meer extra tijd (max +15s)
  // - als elapsed=0 => extra=15s => totaal 30s
  // - als elapsed=15s => extra=0 => totaal 15s
  const extra = Math.min(MAX_EXTRA_MS, Math.max(0, BASE_QUESTION_MS - elapsedMs));
  return BASE_QUESTION_MS + extra;
}

function applyNextLockForCurrentQuestion(){
  const s = state[idx];
  if(!s || !s.answered){
    clearLockInterval();
    nextBtn.disabled = true;
    nextBtn.textContent = "VOLGENDE";
    return;
  }

  const now = Date.now();
  const unlockAt = s.unlockAt || now;

  if(now >= unlockAt){
    clearLockInterval();
    nextBtn.disabled = false;
    nextBtn.textContent = "VOLGENDE";
    return;
  }

  nextBtn.disabled = true;
  setNextButtonCountdown(unlockAt - now);

  clearLockInterval();
  lockInterval = setInterval(() => {
    const left = unlockAt - Date.now();
    if(left <= 0){
      clearLockInterval();
      nextBtn.disabled = false;
      nextBtn.textContent = "VOLGENDE";
      return;
    }
    setNextButtonCountdown(left);
  }, 200);
}

function updateStats(){
  const good = state.filter(s => s?.answered && s.correct).length;
  const bad  = state.filter(s => s?.answered && !s.correct).length;
  statGood.textContent = String(good);
  statBad.textContent = String(bad);
  statQ.textContent = `${idx + 1}/${QUESTIONS.length}`;
}

function showFeedback(correct, q){
  feedbackBox.classList.remove("hidden");
  feedbackHead.textContent = correct ? "Goed! ✅" : "Fout! ❌";
  const right = q.answers[q.correctIndex];
  const extra = q.explain ? `<div style="margin-top:8px;">${q.explain}</div>` : "";
  feedbackBody.innerHTML = correct
    ? `Nice. Het juiste antwoord is: <b>${right}</b>.${extra}`
    : `Het juiste antwoord is: <b>${right}</b>.${extra}`;
}

function hideFeedback(){
  feedbackBox.classList.add("hidden");
  feedbackHead.textContent = "—";
  feedbackBody.textContent = "";
}

function renderPlayers(){
  playersEl.innerHTML = "";

  PLAYERS.forEach((p, i) => {
    const card = document.createElement("div");
    card.className = "playerCard";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <div class="playerMeta">
        <div class="playerName">${p.name}</div>
        <div class="playerHint">Klik om te kiezen</div>
      </div>
    `;

    card.onclick = () => {
      selectedPlayerIndex = i;
      selectedPlayerName = p.name;

      [...playersEl.children].forEach(el => el.classList.remove("selected"));
      card.classList.add("selected");

      startBtn.disabled = false;
    };

    playersEl.appendChild(card);
  });
}

function renderQuiz(){
  hideFeedback();

  // header weg in quiz
  topbar.style.display = "none";

  const q = QUESTIONS[idx];
  const s = state[idx] || {};

  // starttijd per vraag (eenmalig)
  if(!s.startedAt){
    s.startedAt = Date.now();
    state[idx] = s;
  }

  qNr.textContent = `Vraag ${idx + 1}`;
  qText.textContent = q.text || "";

  // image
  imgWrap.innerHTML = "";
  if(q.image){
    const img = document.createElement("img");
    img.src = q.image;
    img.alt = `Vraag ${idx + 1} afbeelding`;
    imgWrap.appendChild(img);
  }

  // answers
  answersEl.innerHTML = "";
  q.answers.forEach((txt, i) => {
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.type = "button";
    b.textContent = txt;

    // al geantwoord? dan disable + highlight
    if(s.answered){
      b.disabled = true;
      if(i === s.selectedIndex && s.correct) b.classList.add("correctPick");
      if(i === s.selectedIndex && !s.correct) b.classList.add("wrongPick");
      if(!s.correct && i === q.correctIndex) b.classList.add("correctPick");
    }

    b.onclick = () => {
      const cur = state[idx] || {};
      if(cur.answered) return; // eenmaal kiezen

      const correct = (i === q.correctIndex);

      const answeredAt = Date.now();
      const startedAt  = cur.startedAt || answeredAt;
      const elapsed    = answeredAt - startedAt;

      const required   = requiredTimeForQuestion(elapsed);
      const unlockAt   = startedAt + required;

      state[idx] = {
        ...cur,
        answered: true,
        correct,
        selectedIndex: i,
        answeredAt,
        unlockAt
      };

      updateStats();
      renderQuiz();
      showFeedback(correct, q);
      applyNextLockForCurrentQuestion();
    };

    answersEl.appendChild(b);
  });

  // nav
  prevBtn.disabled = (idx === 0);

  // VOLGENDE staat standaard uit, en wordt door lock functie geregeld
  nextBtn.disabled = true;
  nextBtn.textContent = "VOLGENDE";
  applyNextLockForCurrentQuestion();

  // show view
  show(quizView);
  updateStats();

  // user card
  const p = PLAYERS[selectedPlayerIndex];
  youImg.src = p?.img || "";
  youName.textContent = p?.name || "—";

  // als al geantwoord: feedback laten zien
  if(s.answered){
    showFeedback(!!s.correct, q);
  }
}

function buildDiploma(){
  const total = QUESTIONS.length;
  const good = state.filter(s => s?.answered && s.correct).length;
  const pct = total ? Math.round((good / total) * 100) : 0;

  const now = new Date();
  const dateStr = now.toLocaleDateString("nl-NL", { year: "numeric", month: "long", day: "2-digit" });

  if(diplomaName) diplomaName.textContent = selectedPlayerName || (youName?.textContent || "—");
  if(dScore) dScore.textContent = String(good);
  if(dTotal) dTotal.textContent = String(total);
  if(dPct) dPct.textContent = `${pct}%`;
  if(dDate) dDate.textContent = dateStr;
}

function buildReview(){
  if(!reviewList) return;
  reviewList.innerHTML = "";

  QUESTIONS.forEach((q, qi) => {
    const s = state[qi] || {};
    const userIdx = (typeof s.selectedIndex === "number") ? s.selectedIndex : null;

    const userAnswer = (userIdx !== null && q.answers?.[userIdx]) ? q.answers[userIdx] : "—";
    const correctAnswer = q.answers?.[q.correctIndex] ?? "—";
    const ok = !!s.correct;

    const imgSrc = q.image || null;

    const card = document.createElement("div");
    card.className = "reviewCard";

    card.innerHTML = `
      <div class="reviewHead">
        <div class="reviewNr"><b>Vraag ${qi + 1}</b></div>
        <div class="reviewResult ${ok ? "ok" : "bad"}">${ok ? "GOED ✅" : "FOUT ❌"}</div>
      </div>

      <div class="reviewQ">${q.text ?? ""}</div>

      ${imgSrc ? `<img class="reviewImg" src="${imgSrc}" alt="Vraag ${qi + 1} afbeelding">` : ""}

      <div class="reviewRow"><b>Jouw antwoord:</b> <span>${userAnswer}</span></div>
      <div class="reviewRow"><b>Juiste antwoord:</b> <span>${correctAnswer}</span></div>

      ${q.explain ? `<div class="reviewExplain">${q.explain}</div>` : ""}
    `;

    reviewList.appendChild(card);
  });
}

function renderOthersAtEnd(){
  othersEnd.innerHTML = "";
  PLAYERS.forEach((p, i) => {
    if(i === selectedPlayerIndex) return;
    const chip = document.createElement("div");
    chip.className = "otherChip";
    chip.innerHTML = `<img src="${p.img}" alt="${p.name}"><span>${p.name}</span>`;
    othersEnd.appendChild(chip);
  });
}

function renderResult(){
  topbar.style.display = "none";
  show(resultView);

  const total = QUESTIONS.length;
  const good = state.filter(s => s?.answered && s.correct).length;
  const bad  = state.filter(s => s?.answered && !s.correct).length;

  resultSummary.innerHTML = `
    <b>${selectedPlayerName || "Jij"}</b>, jouw score: <b>${good}</b> goed, <b>${bad}</b> fout
    (van de <b>${total}</b>).
  `;

  buildDiploma();
  buildReview();
  renderOthersAtEnd();
  scrollToTop();
}

// ====== EVENTS ======
startBtn.onclick = () => {
  idx = 0;
  state = QUESTIONS.map(() => ({}));
  clearLockInterval();
  renderQuiz();
  scrollToTop();
};

prevBtn.onclick = () => {
  if(idx <= 0) return;
  idx--;
  clearLockInterval();
  renderQuiz();
  scrollToTop();
};

nextBtn.onclick = () => {
  const s = state[idx];
  if(!s?.answered) return;
  if(s.unlockAt && Date.now() < s.unlockAt) return; // nog wachten

  if(idx >= QUESTIONS.length - 1){
    clearLockInterval();
    renderResult();
    return;
  }

  idx++;
  clearLockInterval();
  renderQuiz();
  scrollToTop();
};

playAgainBtn.onclick = () => {
  // terug naar start
  topbar.style.display = "";
  selectedPlayerIndex = null;
  selectedPlayerName = null;
  idx = 0;
  state = QUESTIONS.map(() => ({}));
  startBtn.disabled = true;
  renderPlayers();
  show(playerView);
  scrollToTop();
};

if(printPdfBtn){
  printPdfBtn.onclick = () => {
    window.print(); // kies in browser: Opslaan als PDF
  };
}

// ====== INIT ======
topbar.style.display = "";
renderPlayers();
show(playerView);
