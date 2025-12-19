// =====================================
// ✅ CONFIG: SPELERS + VRAGEN
// =====================================
const PLAYERS = [
  { name: "Kaj", photo: "kaj.jpg" },
  { name: "Luuk", photo: "luuk.jpg" },
  { name: "Ilonka", photo: "ilonka.jpg" },
  { name: "Carmen", photo: "carmen.jpg" },
  { name: "Ferran", photo: "ferran.jpg" },
  { name: "Richard", photo: "richard.jpg" },
  // { name: "Kaj & Luuk", photo: "kaj-luuk.jpg" }, // optioneel
];

// =====================================================
// ❓ VRAGEN
// =====================================================

// Zet hier jouw vragen. image mag .jpg/.png/.gif zijn.
// TIP: wil je geen foto bij een vraag? laat image leeg: ""
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
  },
  {
    vraag: "Wie is het oudste?",
    image: "oud.jpg",
    antwoorden: ["Luuk", "Ilonka", "Richard", "Kaj"],
    correctIndex: 1,
    uitleg: "één oma is het oudste."
  },
  {
    vraag: "Van wie is dit skateboard?",
    image: "skateboard.jpg",
    antwoorden: ["Richard", "De buurjongen", "Ferran", "Kaj"],
    correctIndex: 2,
    uitleg: "Oome Ferran natuurlijk"
  },
  {
    vraag: "Van wie zijn deze tekeningen?",
    image: "tekening.jpg",
    antwoorden: ["Richard", "Luuk", "Ferran", "Kaj"],
    correctIndex: 1,
    uitleg: "Kunstenaar Luuk 👨‍🎨"
  },
  {
    vraag: "Wat is de lievelingskleur van Oome Ferran?",
    image: "zwart.jpeg",
    antwoorden: ["Blauw", "Wit", "Zwart", "Rood"],
    correctIndex: 2,
    uitleg: "🖤Ferran houdt van dezelfde kleuren als één Oma"
  },
  
  {
    
  {
    vraag: "Wie eet er het gezondst?",
    image: "koken2.jpg",
    antwoorden: ["Kaj", "Richard", "Luuk", "Ilonka"],
    correctIndex: 3,
    uitleg: "Oma Ilonka is al meer dan 6kg afgevallen! 👏"
  },
  {
    vraag: "Wat voor een soort boom is een kerstboom?",
    image: "kerstboom.jpg",
    antwoorden: ["Spar", "Eik", "Denneboom", "Palmboom"],
    correctIndex: 0,
    uitleg:
`In Nederland zijn kerstbomen meestal een **spar**.

Veel verkochte soorten:
- Fijnspar
- Nordmann-spar
- Servische spar`
  },
  {
    vraag: "Wat is het juiste antwoord?",
    image: "fruit1.jpg",
    antwoorden: ["18", "19", "20", "21"],
    correctIndex: 2,
    uitleg: "Uit de sommen volgt: sinaasappel = 9 en ananas = 11. Samen is dat 20."
  },
  {
    vraag: "Wat is de waarde van de banaan?",
    image: "fruit2.jpg",
    antwoorden: ["5", "6", "7", "8"],
    correctIndex: 2,
    uitleg: "Druiven zijn 22. 22 − 15 = 7, dus de banaan is 7."
  },
  {
    vraag: "Wat is dit?",
    image: "takis.jpg",
    antwoorden: ["Doritos", "Takis", "Cheetos", "Pringles"],
    correctIndex: 1,
    uitleg: "Takis zijn pittige snacks, oome Ferran wilt ze al lang proberen."
  },
  {
    vraag: "Wat is dit?",
    image: "knikkers.jpg",
    antwoorden: ["Kauwgomballen", "IJsballetjes", "Knikkers", "Kralen"],
    correctIndex: 2,
    uitleg: "Klassiek speelgoed, helaas nooit meer terug in de trend gekomen."
  },
  {
    vraag: "Wat is dit?",
    image: "fidgetspinner.jpg",
    antwoorden: ["Slinky", "Voetbal", "Draaiketting", "Fidget spinner"],
    correctIndex: 3,
    uitleg: "Fidget spinners waren ineens overal."
  },
  {
    vraag: "Wat is dit?",
    image: "beyblade.jpg",
    antwoorden: ["Tol", "Beyblade", "Fidget spinner", "Jojo"],
    correctIndex: 1,
    uitleg: "Beyblades moeten echt een comeback maken."
  },
  {
    vraag: "Wat is dit?",
    image: "tamagotchi.jpg",
    antwoorden: ["Tamagochi", "Gameboy", "Pager", "Mini-telefoon"],
    correctIndex: 0,
    uitleg: "Een Tamagotchi is een digitaal huisdiertje dat je moest verzorgen."
  },
  {
    vraag: "Wat is dit?",
    image: "neopets.jpg",
    antwoorden: ["Neopets", "Habbo Hotel", "Club Penguin", "The Sims"],
    correctIndex: 0,
    uitleg: "Neopets was een populaire online game waarin je digitale huisdieren verzorgde."
  },
  {
    vraag: "Hoeveel spelers staan er in één voetbalteam op het veld?",
    image: "voetbalteam.jpg",
    antwoorden: ["9", "10", "11", "12"],
    correctIndex: 2,
    uitleg: "Een elftal = 11 spelers ⚽"
  },
  {
    vraag: "Wat gebeurt er bij buitenspel?",
    image: "buitenspel.jpg",
    antwoorden: ["Vrije trap", "Inworp", "Spel wordt afgefloten", "Penalty"],
    correctIndex: 2,
    uitleg: "Bij buitenspel fluit de scheidsrechter het spel af."
  },
  {
    vraag: "Welke voetbalclub is dit?",
    image: "juventus.jpg",
    antwoorden: ["Ajax", "Juventus", "FC Barcelona", "Real Madrid"],
    correctIndex: 1,
    uitleg: "Dit is Juventus, een van de bekendste clubs van Italië."
  },
  {
    vraag: "Welke voetbalclub is dit?",
    image: "fcutrecht.jpg",
    antwoorden: ["FC Groningen", "Real Madrid", "FC Utrecht", "FC Barcelona"],
    correctIndex: 2,
    uitleg: "Dit is FC Utrecht. (FC UUUUUUUUUUtrecht 😄)"
  },
  {
    vraag: "Waar staat TOP Oss voor?",
    image: "toposs.jpg",
    antwoorden: ["Trots Op Oss", "Toppers Oss", "Tot Ons Profijt Oss", "Tot Ons Plezier Oss"],
    correctIndex: 3,
    uitleg: "Leuk weetje: TOP Oss begon als TOP (1928), was FC Oss (2009–2018) en is weer TOP Oss."
  },
  {
    vraag: "Wie is dit?",
    image: "creeper.jpg",
    antwoorden: ["Mario", "Sonic", "Pikachu", "Creeper"],
    correctIndex: 3,
    uitleg: "Dit is een Creeper uit Minecraft. Pas op… 💥"
  },
  {
    vraag: "Wie is dit?",
    image: "chimp.jpg",
    antwoorden: ["Henk Zegelaar", "tralalero tralala", "chimpanzini bananini", "Bokito"],
    correctIndex: 2,
    uitleg: "Dit is ‘chimpanzini bananini’ — zo’n bekende meme/AI-afbeelding."
  },
  {
    vraag: "Wie is dit?",
    image: "haai.jpg",
    antwoorden: ["Reagea Shark", "Sharktale", "Tralalero tralala", "Jaws"],
    correctIndex: 2,
    uitleg: "Dit is ‘Tralalero tralala’ — ook zo’n bekende meme/AI-afbeelding."
  },
  {
    vraag: "In welke film speelde hij?",
    image: "cars.jpg",
    antwoorden: ["Paw Patrol", "Minecraft", "Cars", "Fast & the Furious"],
    correctIndex: 2,
    uitleg: "Lightning McQueen hoort bij Cars 🏁"
  },
  {
    vraag: "In welke film speelde deze knaap?",
    image: "zac.jpg",
    antwoorden: ["Harry Potter", "High School Musical", "Gooise Vrouwen", "Camp Rock"],
    correctIndex: 1,
    uitleg: "Zac Efron werd mega bekend door High School Musical."
  },
  {
    vraag: "In welke film speelde deze man?",
    image: "david.jpg",
    antwoorden: ["Dukes of Hazzard", "Flodder", "The Godfather", "Spongebob Squarepants"],
    correctIndex: 3,
    uitleg: "In de eerste SpongeBob-film komt David Hasselhoff (als zichzelf) te hulp."
  },
  {
    vraag: "Wat wordt hier overhandigd?",
    image: "zwem.jpg",
    antwoorden: ["Veterstrikdiploma 👟", "Tandenpoets diploma 🦷", "Zwemdiploma 🏊‍♂️", "HBO Diploma 🧾"],
    correctIndex: 3,
    uitleg: "Zwemdiploma is binnen!"
  },
  {
    vraag: "Welke oefening moest Kaj hier doen?",
    image: "zwem.gif",
    antwoorden: ["Rugslag", "Vlinderslag", "Borstcrawl", "Schoolslag"],
    correctIndex: 2,
    uitleg: "Borstcrawl. Goede workout hoor!"
  },
  {
    vraag: "Wie is dit?",
    image: "mosterd.jpg",
    antwoorden: ["Messi", "Ronaldo", "Richard", "Arjen Robben"],
    correctIndex: 2,
    uitleg: "Papa (Richard) met mosterd op zijn knie 😭"
  },
  {
    vraag: "Wie is dit?",
    image: "eenoma.jpg",
    antwoorden: ["een papa", "een opa", "één oma", "een broer"],
    correctIndex: 2,
    uitleg: "Een oma kan goed salsa dansen 💃"
  },
  {
    vraag: "Wie is dit?",
    image: "sleutels.jpg",
    antwoorden: ["Carmen", "Luuk", "Richard", "Ferran"],
    correctIndex: 3,
    uitleg: "Sleutels, tekeningen, handschoenen… altijd 😅"
  },
];

// =====================================
// 🔧 DOM HELPERS
// =====================================
const $ = (id) => document.getElementById(id);

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
const mediaWrap  = $("mediaWrap");

const answersEl  = $("answers");

const feedbackEl   = $("feedback");
const feedbackHead = $("feedbackHead");
const feedbackBody = $("feedbackBody");

const backBtn    = $("backBtn");
const nextBtn    = $("nextBtn");

const resultSummary = $("resultSummary");
const resultMeta    = $("resultMeta");

const dipGood   = $("dipGood");
const dipBad    = $("dipBad");
const dipTotal  = $("dipTotal");
const diplomaMeta = $("diplomaMeta");

const reviewList = $("reviewList");
const restartBtn = $("restartBtn");
const showAllBtn = $("showAllBtn");
const showWrongBtn = $("showWrongBtn");
const toTopBtn = $("toTopBtn");

// =====================================
// 🧠 STATE
// =====================================
let currentPlayer = null;
let currentIndex = 0;

// per vraag: { pickedIndex: number|null }
let answersState = QUESTIONS.map(() => ({ pickedIndex: null }));

// =====================================
// 🧭 UI
// =====================================
function show(view){
  [playerView, quizView, resultView].forEach(v => v.classList.remove("active"));
  view.classList.add("active");
}

function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function fmtNow(){
  const d = new Date();
  const pad = (n) => String(n).padStart(2,"0");
  return `${pad(d.getDate())}-${pad(d.getMonth()+1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// =====================================
// 👤 PLAYERS
// =====================================
function renderPlayers(){
  playersEl.innerHTML = "";

  PLAYERS.forEach((p) => {
    const el = document.createElement("div");
    el.className = "player";
    el.innerHTML = `
      <img src="${p.photo}" alt="${p.name}">
      <span>${p.name}</span>
    `;
    el.addEventListener("click", () => selectPlayer(p, el));
    playersEl.appendChild(el);
  });
}

function selectPlayer(p, el){
  currentPlayer = p;
  [...playersEl.children].forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  startBtn.disabled = false;
}

// =====================================
// ▶️ START
// =====================================
startBtn.addEventListener("click", () => {
  startGame();
});

function startGame(){
  currentIndex = 0;
  answersState = QUESTIONS.map(() => ({ pickedIndex: null }));

  youImg.src = currentPlayer?.photo || "";
  youName.textContent = currentPlayer?.name || "Speler";

  show(quizView);
  renderQuestion();
  scrollToTop();
}

// =====================================
// ❓ RENDER QUESTION
// =====================================
function setNextLabel(){
  nextBtn.textContent = (currentIndex === QUESTIONS.length - 1) ? "RESULTAAT" : "VOLGENDE";
}

function renderQuestion(){
  const q = QUESTIONS[currentIndex];
  const st = answersState[currentIndex];

  statsEl.textContent = `Vraag ${currentIndex + 1} / ${QUESTIONS.length}`;
  qNrEl.textContent = `Vraag ${currentIndex + 1}`;
  qTextEl.textContent = q.vraag;

  // media
  renderMedia(q.image);

  // answers
  answersEl.innerHTML = "";
  feedbackEl.classList.add("hidden");
  feedbackHead.textContent = "";
  feedbackBody.innerHTML = "";

  q.antwoorden.forEach((txt, idx) => {
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.textContent = txt;

    b.addEventListener("click", () => pickAnswer(idx));
    answersEl.appendChild(b);
  });

  // nav
  backBtn.disabled = (currentIndex === 0);
  setNextLabel();

  // next enabled only when answered
  nextBtn.disabled = (st.pickedIndex === null);

  // if already answered: paint + feedback
  if(st.pickedIndex !== null){
    paintAnsweredState();
    showFeedback();
  }
}

function renderMedia(src){
  // Reset: altijd img gebruiken (gif speelt gewoon af)
  qImgEl.style.display = "block";

  if(!src){
    qImgEl.src = "";
    qImgEl.alt = "Geen afbeelding";
    qImgEl.style.display = "none";
    return;
  }

  qImgEl.src = src;
  qImgEl.alt = "Vraag afbeelding";
}

function pickAnswer(pickedIndex){
  answersState[currentIndex].pickedIndex = pickedIndex;

  paintAnsweredState();
  showFeedback();

  nextBtn.disabled = false;
  setNextLabel();
}

function paintAnsweredState(){
  const q = QUESTIONS[currentIndex];
  const st = answersState[currentIndex];
  const btns = [...answersEl.querySelectorAll("button")];

  btns.forEach((b, idx) => {
    b.classList.remove("selectedPick","correct","wrong");
    if(st.pickedIndex === idx) b.classList.add("selectedPick");
    if(st.pickedIndex !== null && idx === q.correctIndex) b.classList.add("correct");
    if(st.pickedIndex === idx && idx !== q.correctIndex) b.classList.add("wrong");
  });
}

function showFeedback(){
  const q = QUESTIONS[currentIndex];
  const st = answersState[currentIndex];
  if(st.pickedIndex === null) return;

  const isCorrect = st.pickedIndex === q.correctIndex;
  const chosen = q.antwoorden[st.pickedIndex];
  const correct = q.antwoorden[q.correctIndex];

  feedbackEl.classList.remove("hidden");
  feedbackHead.textContent = isCorrect ? "Goed!" : "Fout!";
  feedbackHead.className = "feedbackHead " + (isCorrect ? "good" : "bad");

  const uitleg = q.uitleg ? `<p><b>Uitleg:</b> ${escapeHtml(q.uitleg)}</p>` : "";

  feedbackBody.innerHTML = `
    <p><b>Jouw antwoord:</b> ${escapeHtml(chosen)}</p>
    <p><b>Juiste antwoord:</b> ${escapeHtml(correct)}</p>
    ${uitleg}
  `;
}

// basic html escape
function escapeHtml(str){
  return String(str)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

// =====================================
// ⬅️➡️ NAV
// =====================================
backBtn.addEventListener("click", () => {
  if(currentIndex === 0) return;
  currentIndex--;
  renderQuestion();
  scrollToTop();
});

nextBtn.addEventListener("click", () => {
  if(answersState[currentIndex].pickedIndex === null) return;

  if(currentIndex < QUESTIONS.length - 1){
    currentIndex++;
    renderQuestion();
    scrollToTop();
  }else{
    renderResult();
    scrollToTop();
  }
});

// =====================================
// 🏁 RESULT
// =====================================
function computeScore(){
  let good = 0;
  let bad = 0;

  QUESTIONS.forEach((q, i) => {
    const p = answersState[i].pickedIndex;
    if(p === null) return;
    if(p === q.correctIndex) good++;
    else bad++;
  });

  return { good, bad, total: QUESTIONS.length };
}

function renderResult(){
  show(resultView);

  const { good, bad, total } = computeScore();
  const name = currentPlayer?.name || "Speler";
  const stamp = fmtNow();

  resultSummary.textContent = `${name}, je had ${good} goed en ${bad} fout 🎄`;
  resultMeta.textContent = `Gespeeld op ${stamp}`;

  dipGood.textContent = String(good);
  dipBad.textContent  = String(bad);
  dipTotal.textContent = String(total);
  diplomaMeta.textContent = `${name} • ${stamp}`;

  buildReviewList({ onlyWrong:false });
}

function buildReviewList({ onlyWrong }){
  reviewList.innerHTML = "";

  QUESTIONS.forEach((q, i) => {
    const picked = answersState[i].pickedIndex;
    const isAnswered = picked !== null;
    const isCorrect = isAnswered && picked === q.correctIndex;
    const isWrong = isAnswered && !isCorrect;

    if(onlyWrong && !isWrong) return;

    const badgeHtml = isAnswered
      ? (isCorrect
          ? `<span class="badge good">Goed</span>`
          : `<span class="badge bad">Fout</span>`)
      : `<span class="badge">Niet beantwoord</span>`;

    const chosen = isAnswered ? q.antwoorden[picked] : "—";
    const correct = q.antwoorden[q.correctIndex];

    const row = document.createElement("div");
    row.className = "reviewRow";
    row.innerHTML = `
      <div class="reviewThumb">
        <img src="${q.image || ""}" alt="Vraag ${i+1}">
      </div>
      <div class="reviewInfo">
        <h4>${i+1}. ${escapeHtml(q.vraag)}</h4>
        <div class="reviewMeta">
          ${badgeHtml}
          <span><b>Jij:</b> ${escapeHtml(chosen)}</span>
          <span><b>Juiste:</b> ${escapeHtml(correct)}</span>
        </div>
        ${q.uitleg ? `<div class="smallNote" style="margin:8px 0 0;"><b>Uitleg:</b> ${escapeHtml(q.uitleg)}</div>` : ""}
      </div>
    `;
    reviewList.appendChild(row);
  });

  if(!reviewList.children.length){
    const empty = document.createElement("div");
    empty.className = "smallNote";
    empty.textContent = "Geen foute antwoorden (of nog niets beantwoord).";
    reviewList.appendChild(empty);
  }
}

// filters
showAllBtn.addEventListener("click", () => buildReviewList({ onlyWrong:false }));
showWrongBtn.addEventListener("click", () => buildReviewList({ onlyWrong:true }));

toTopBtn.addEventListener("click", () => scrollToTop());

// restart
restartBtn.addEventListener("click", () => {
  currentPlayer = null;
  startBtn.disabled = true;
  [...playersEl.children].forEach(c => c.classList.remove("selected"));
  show(playerView);
  scrollToTop();
});

// init
renderPlayers();
