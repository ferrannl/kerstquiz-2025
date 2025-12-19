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
    image: "kleur.jpg",
    antwoorden: ["Blauw", "Wit", "Zwart", "Rood"],
    correctIndex: 2,
    uitleg: "🖤Ferran houdt van dezelfde kleuren als één Oma"
  },
  
  {
   /* vraag: "Wie kan er het lekkerste koken?",
    image: "koken1.jpg",
    antwoorden: ["Carmen", "Richard", "Ferran", "Ilonka"],
    correctIndex: 1,
    uitleg: "Zei d'r iemand thuisbezorgd? 👨‍🍳"
  },
  */
    
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

const restartBtn = $("restartBtn");

// Optionele knoppen (bestaan niet in jouw HTML -> mag dus null zijn)
const toggleOnlyWrong = $("toggleOnlyWrong");
const toggleAll       = $("toggleAll");
const scrollTopBtn    = $("scrollTopBtn");
const pdfBtn          = $("pdfBtn");

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
  if(!playersEl) return;
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

  nextBtn.disabled = !s.answered;

  q.antwoorden.forEach((txt, idx) => {
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.textContent = txt;
    b.onclick = () => pickAnswer(idx);
    answersEl.appendChild(b);
  });

  if(s.answered){
    paintAnsweredState();
    showFeedback(s.correct, q, s.pickedIndex);
  }
}

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

function paintAnsweredState(){
  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];
  const btns = [...answersEl.querySelectorAll("button")];

  btns.forEach((b, idx) => {
    b.classList.remove("correct", "wrong", "selectedPick");

    if(s.answered && idx === q.correctIndex){
      b.classList.add("correct");
    }
    if(s.answered && s.pickedIndex === idx && idx !== q.correctIndex){
      b.classList.add("wrong");
    }
    if(s.answered && s.pickedIndex === idx){
      b.classList.add("selectedPick");
    }

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
// 🔁 RESTART + (OPTIONELE) FILTERS
// =====================================================
restartBtn.onclick = () => {
  if(topbar) topbar.style.display = "";
  currentPlayer = null;
  startBtn.disabled = true;
  [...playersEl.children].forEach(c => c.classList.remove("selected"));
  show(playerView);
  scrollToTop();
};

// Deze bestaan mogelijk niet -> alleen koppelen als ze er zijn
if(toggleOnlyWrong) toggleOnlyWrong.onclick = () => buildReviewList({ onlyWrong:true });
if(toggleAll)       toggleAll.onclick       = () => buildReviewList({ onlyWrong:false });
if(scrollTopBtn)    scrollTopBtn.onclick    = () => scrollToTop();
if(pdfBtn)          pdfBtn.onclick          = () => makePdf();

// init
renderPlayers();
