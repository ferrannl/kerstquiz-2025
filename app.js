// =====================================================
// 👤 SPELERS (LOKALE FOTO'S)
// =====================================================
const PLAYERS = [
  { name: "Kaj & Luuk", photo: "kaj-luuk.jpg" },
  { name: "Kaj", photo: "kaj.jpg" },
  { name: "Luuk", photo: "luuk.jpg" },
  { name: "Ilonka", photo: "ilonka.jpg" },
  { name: "Carmen", photo: "carmen.jpg" },
  { name: "Ferran", photo: "ferran.jpg" },
  { name: "Richard", photo: "richard.jpg" }
];

// =====================================================
// ❓ VRAGEN
// =====================================================
const QUESTIONS = [
  {
    vraag: "Wie is het langste?",
    image: "lang.jpg",
    antwoorden: ["Luuk", "Ferran", "Richard", "Kaj"],
    correctIndex: 1,
    uitleg: "Ferran is het langste."
  },
  {
    vraag: "Wie is het jongste?",
    image: "jong.jpg",
    antwoorden: ["Luuk", "Ferran", "Richard", "Kaj"],
    correctIndex: 0,
    uitleg: "Luuk is het jongste."
  }
];

// =====================================================
// 🔧 HELPERS
// =====================================================
const $ = (id) => document.getElementById(id);

function show(view){
  [playerView, quizView, resultView].forEach(v => v.classList.remove("active"));
  view.classList.add("active");
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function safeSetText(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = String(value);
}

function setNextLabel(){
  nextBtn.textContent = (currentIndex === QUESTIONS.length - 1) ? "RESULTAAT" : "VOLGENDE";
}

// =====================================================
// 📌 ELEMENTS
// =====================================================
const topbar     = $("topbar");
const playerView = $("playerView");
const quizView   = $("quizView");
const resultView = $("resultView");

const playersEl  = $("players");
const startBtn   = $("startBtn");

const youImg     = $("youImg");
const youName    = $("youName");
const statsEl    = $("stats");

const qNrEl      = $("qNr");
const qTextEl    = $("qText");
const qImgEl     = $("qImg");
const answersEl  = $("answers");

const feedbackEl   = $("feedback");
const feedbackHead = $("feedbackHead");
const feedbackBody = $("feedbackBody");

const backBtn    = $("backBtn");
const nextBtn    = $("nextBtn");

const toggleOnlyWrong = $("toggleOnlyWrong");
const toggleAll       = $("toggleAll");
const scrollTopBtn    = $("scrollTopBtn");
const pdfBtn          = $("pdfBtn");
const restartBtn      = $("restartBtn");

// =====================================================
// 🧠 STATE
// =====================================================
let currentPlayer = null;
let currentIndex  = 0;

let state = QUESTIONS.map(() => ({
  answered: false,
  pickedIndex: null,
  correct: false
}));

// =====================================================
// 🎮 INIT PLAYER SELECT
// =====================================================
function renderPlayers(){
  playersEl.innerHTML = "";
  PLAYERS.forEach(p => {
    const el = document.createElement("div");
    el.className = "player";
    el.innerHTML = `<img src="${p.photo}" alt="${p.name}"><span>${p.name}</span>`;
    el.onclick = () => selectPlayer(p, el);
    playersEl.appendChild(el);
  });
}

function selectPlayer(p, el){
  currentPlayer = p;
  [...playersEl.children].forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  startBtn.disabled = false;
}

startBtn.onclick = () => {
  if(topbar) topbar.style.display = "none";
  startGame();
};

// =====================================================
// ▶️ GAME FLOW
// =====================================================
function startGame(){
  currentIndex = 0;
  state = QUESTIONS.map(() => ({
    answered: false,
    pickedIndex: null,
    correct: false
  }));

  youImg.src = currentPlayer?.photo || "";
  youName.textContent = currentPlayer?.name || "Speler";

  show(quizView);
  renderQuestion();
  scrollToTop();
}

function renderQuestion(){
  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];

  statsEl.textContent = `Vraag ${currentIndex + 1} / ${QUESTIONS.length}`;
  qNrEl.textContent = `Vraag ${currentIndex + 1}`;
  qTextEl.textContent = q.vraag;

  qImgEl.src = q.image || "";
  qImgEl.alt = q.vraag;

  answersEl.innerHTML = "";
  feedbackEl.classList.add("hidden");

  backBtn.disabled = (currentIndex === 0);
  setNextLabel();

  // Next is alleen beschikbaar als er gekozen is (maar keuze blijft wijzigbaar)
  nextBtn.disabled = !s.answered;

  q.antwoorden.forEach((txt, idx) => {
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.textContent = txt;
    b.onclick = () => pickAnswer(idx);
    answersEl.appendChild(b);
  });

  // Als al eerder gekozen: laat direct de status + feedback zien,
  // maar laat knoppen actief zodat je kunt wijzigen.
  if(s.answered){
    paintAnsweredState();               // highlights + selected
    showFeedback(s.correct, q, s.pickedIndex);
  }
}

/**
 * ✅ Antwoord kiezen OF wijzigen
 * - knoppen blijven klikbaar
 * - state wordt overschreven
 * - styling + feedback wordt live geüpdatet
 */
function pickAnswer(pickedIndex){
  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];

  const isCorrect = pickedIndex === q.correctIndex;

  s.answered = true;
  s.pickedIndex = pickedIndex;
  s.correct = isCorrect;

  paintAnsweredState();
  showFeedback(isCorrect, q, pickedIndex);

  nextBtn.disabled = false;
  setNextLabel();
}

/**
 * ✅ Highlight correct + wrong + selected, maar NIET disablen
 */
function paintAnsweredState(){
  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];
  const btns = [...answersEl.querySelectorAll("button")];

  btns.forEach((b, idx) => {
    // reset
    b.classList.remove("correct", "wrong", "selectedPick");

    // altijd: laat juiste antwoord groen zien zodra er gekozen is
    if(s.answered && idx === q.correctIndex){
      b.classList.add("correct");
    }

    // de gekozen foute optie rood
    if(s.answered && s.pickedIndex === idx && idx !== q.correctIndex){
      b.classList.add("wrong");
    }

    // optioneel: markeer gekozen optie subtiel (ook als correct)
    if(s.answered && s.pickedIndex === idx){
      b.classList.add("selectedPick");
    }

    // knoppen blijven klikbaar -> dus NIET disabled
    b.disabled = false;
  });
}

function showFeedback(isCorrect, q, pickedIndex){
  feedbackEl.classList.remove("hidden");
  feedbackHead.textContent = isCorrect ? "✅ Goed!" : "❌ Fout!";
  feedbackHead.className = "feedbackHead " + (isCorrect ? "good" : "bad");

  const chosen  = (pickedIndex != null) ? q.antwoorden[pickedIndex] : "—";
  const correct = q.antwoorden[q.correctIndex];

  const uitleg = q.uitleg ? `<p><b>Uitleg:</b> ${q.uitleg}</p>` : "";

  feedbackBody.innerHTML = `
    <p><b>Jouw antwoord:</b> ${chosen}</p>
    <p><b>Juiste antwoord:</b> ${correct}</p>
    ${uitleg}
  `;
}

// =====================================================
// ⬅️➡️ NAV
// =====================================================
backBtn.onclick = () => {
  if(currentIndex === 0) return;
  currentIndex--;
  renderQuestion();
  scrollToTop();
};

nextBtn.onclick = () => {
  if(!state[currentIndex].answered) return;

  if(currentIndex < QUESTIONS.length - 1){
    currentIndex++;
    renderQuestion();
    scrollToTop();
  }else{
    renderResult();
    scrollToTop();
  }
};

// =====================================================
// ✅ RESULT + REVIEW
// =====================================================
function renderResult(){
  show(resultView);

  const good = state.filter(s => s.answered && s.correct).length;
  const bad  = state.filter(s => s.answered && !s.correct).length;
  const total = QUESTIONS.length;

  const name = currentPlayer?.name || "Speler";
  safeSetText("resultSummary", `${name}, je had ${good} goed en ${bad} fout 🎄`);

  const othersEnd = $("othersEnd");
  if(othersEnd){
    othersEnd.innerHTML = "";
    PLAYERS.forEach(p => {
      const d = document.createElement("div");
      d.className = "otherCard";
      d.innerHTML = `<img src="${p.photo}" alt="${p.name}"><span>${p.name}</span>`;
      othersEnd.appendChild(d);
    });
  }

  safeSetText("dipGood", good);
  safeSetText("dipBad", bad);
  safeSetText("dipTotal", total);

  const now = new Date();
  const stamp =
    `${String(now.getDate()).padStart(2,"0")}-${String(now.getMonth()+1).padStart(2,"0")}-${now.getFullYear()} ` +
    `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
  safeSetText("diplomaMeta", `${name} • ${stamp}`);

  buildReviewList({ onlyWrong:false });
}

function buildReviewList({ onlyWrong }){
  const list = $("reviewList");
  if(!list) return;

  list.innerHTML = "";

  QUESTIONS.forEach((q, i) => {
    const s = state[i];
    const isWrong = s.answered && !s.correct;
    if(onlyWrong && !isWrong) return;

    const chosen  = (s.pickedIndex != null) ? q.antwoorden[s.pickedIndex] : "—";
    const correct = q.antwoorden[q.correctIndex];

    const badge = s.answered
      ? (s.correct ? `<span class="badge good">✅ Goed</span>` : `<span class="badge bad">❌ Fout</span>`)
      : `<span class="badge">Niet beantwoord</span>`;

    const row = document.createElement("div");
    row.className = "reviewRow";
    row.innerHTML = `
      <div class="reviewThumb">
        <img src="${q.image || ""}" alt="Vraag ${i+1}">
      </div>
      <div class="reviewInfo">
        <h4>${i+1}. ${q.vraag}</h4>
        <div class="reviewMeta">
          ${badge}
          <span><b>Jij:</b> ${chosen}</span>
          <span><b>Juiste:</b> ${correct}</span>
        </div>
        ${q.uitleg ? `<div class="smallNote" style="margin:8px 0 0; opacity:.95;"><b>Uitleg:</b> ${q.uitleg}</div>` : ""}
      </div>
    `;

    list.appendChild(row);
  });
}

// =====================================================
// 📄 PDF
// =====================================================
function makePdf(){
  try{
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });

    const name = currentPlayer?.name || "Speler";
    const good = state.filter(s => s.answered && s.correct).length;
    const bad  = state.filter(s => s.answered && !s.correct).length;
    const total = QUESTIONS.length;

    const now = new Date();
    const stamp =
      `${String(now.getDate()).padStart(2,"0")}-${String(now.getMonth()+1).padStart(2,"0")}-${now.getFullYear()} ` +
      `${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;

    let y = 70;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text("Kerst Quiz 2025 Diploma", 60, y);

    y += 30;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.text(`Naam: ${name}`, 60, y); y += 18;
    doc.text(`Datum: ${stamp}`, 60, y); y += 24;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(`Score: ${good} goed • ${bad} fout • totaal ${total}`, 60, y);

    doc.save(`KerstQuiz_${name}.pdf`);
  }catch(e){
    console.error("PDF error:", e);
    alert("PDF maken lukt niet (check jsPDF / internet).");
  }
}

// =====================================================
// 🔁 RESTART + FILTERS
// =====================================================
restartBtn.onclick = () => {
  if(topbar) topbar.style.display = "";
  currentPlayer = null;
  startBtn.disabled = true;
  [...playersEl.children].forEach(c => c.classList.remove("selected"));
  show(playerView);
  scrollToTop();
};

toggleOnlyWrong.onclick = () => buildReviewList({ onlyWrong:true });
toggleAll.onclick       = () => buildReviewList({ onlyWrong:false });
scrollTopBtn.onclick    = () => scrollToTop();
pdfBtn.onclick          = () => makePdf();

// init
renderPlayers();
