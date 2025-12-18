// =====================================================
// 👤 SPELERS (LOKALE FOTO'S)
// =====================================================
const PLAYERS = [
  { name: "Kaj & Luuk", photo: "kaj-luuk.jpg" },
  { name: "Ilonka",    photo: "ilonka.jpg" },
  { name: "Carmen",    photo: "carmen.jpg" },
  { name: "Ferran",    photo: "ferran.jpg" },
  { name: "Richard",   photo: "richard.jpg" }
];

// =====================================================
// ❓ VRAGEN – MULTIPLE CHOICE + UITLEG (OPGESCHOOND)
// =====================================================
// - Syntax gefixt (template strings / braces)
// - “De rekening is €53,00” verwijderd (dubbel/raar)
// - “Wie is het jongste” correctIndex gefixt naar Luuk
// =====================================================
const QUESTIONS = [
  {
    vraag: "Wat voor een soort boom is een kerstboom?",
    image: "kerstboom.jpg",
    antwoorden: ["Spar", "Eik", "Denneboom", "Palmboom"],
    correctIndex: 0,
    uitleg:
`In Nederland zijn kerstbomen meestal een **spar**.

Veel verkochte soorten:
- Fijnspar (Picea abies)
- Nordmann-spar (Abies nordmanniana)
- Servische spar (Picea omorika)
- Blauwspar (Picea pungens)
- Fraserspar (Abies fraseri)

(En daarom zingen we soms “O denneboom” terwijl het vaak een spar is 😄)`
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
    vraag: "Wie is dit?",
    image: "creeper.jpg",
    antwoorden: ["Mario", "Sonic", "Pikachu", "Creeper"],
    correctIndex: 3,
    uitleg: "Dit is een Creeper uit Minecraft. Pas op… hij kan ontploffen 💥"
  },

  {
    vraag: "Wie is dit?",
    image: "chimp.jpg",
    antwoorden: ["Henk Zegelaar", "tralalero tralala", "chimpanzini bananini", "Bokito"],
    correctIndex: 2,
    uitleg: "Dit is ‘chimpanzini bananini’ — zo’n bekend AI/meme-plaatje."
  },

  {
    vraag: "Wie is dit?",
    image: "haai.jpg",
    antwoorden: ["Reagea Shark", "Sharktale", "Tralalero tralala", "Jaws"],
    correctIndex: 2,
    uitleg: "Dit is ‘Tralalero tralala’ — ook zo’n bekende meme/AI-afbeelding."
  },

  {
    vraag: "In welke film speelde deze knaap? (Zac Efron)",
    image: "zac.jpg",
    antwoorden: ["Harry Potter", "High School Musical", "Grease", "Jaws"],
    correctIndex: 1,
    uitleg: "Zac Efron werd mega bekend door High School Musical."
  },

  {
    vraag: "In welke film speelde deze man?",
    image: "david.jpg",
    antwoorden: ["Dukes of Hazzard", "Flodder", "The Godfather", "Spongebob Squarepants"],
    correctIndex: 3,
    uitleg:
`In de eerste SpongeBob-film komt David Hasselhoff (als zichzelf) te hulp.

Fun fact:
- Hij helpt SpongeBob & Patrick richting Bikini Bottom 😄`
  },

  {
    vraag: "Wie is het oudste?",
    image: "boys.jpg",
    antwoorden: ["Luuk", "Ferran", "Richard", "Kaj"],
    correctIndex: 2,
    uitleg: "Richard is het oudste."
  },

  {
    vraag: "Wie is het jongste?",
    image: "boys.jpg",
    antwoorden: ["Luuk", "Ferran", "Richard", "Kaj"],
    correctIndex: 0,
    uitleg: "Luuk is het jongste."
  },

  {
    vraag: "Wie is dit?",
    image: "mosterd.jpg",
    antwoorden: ["Messi", "Ronaldo", "Richard", "Arjen Robben"],
    correctIndex: 2,
    uitleg: "Richard met mosterd op zijn knie 😭"
  },

  {
    vraag: "Wie is dit?",
    image: "eenoma.jpg",
    antwoorden: ["een papa", "een opa", "één oma", "een broer"],
    correctIndex: 2,
    uitleg: "Een oma kan goed salsa dansen 💃"
  }
];

// =====================================================

const $ = (id) => document.getElementById(id);

let currentPlayer = null;
let idx = 0;
// per vraag: {answered:boolean, correct:boolean, selectedIndex:number|null}
let state = QUESTIONS.map(() => ({ answered:false, correct:false, selectedIndex:null }));

// Views
const playerView = $("playerView");
const quizView   = $("quizView");
const resultView = $("resultView");

// Player select UI
const playersEl = $("players");
const startBtn  = $("startBtn");

// Quiz UI
const qNr = $("qNr");
const qText = $("qText");
const imgWrap = $("imgWrap");
const answersEl = $("answers");

const feedbackBox = $("feedbackBox");
const feedbackHead = $("feedbackHead");
const feedbackBody = $("feedbackBody");

const prevBtn = $("prevBtn");
const nextBtn = $("nextBtn");

// =====================================================
// 🔍 IMAGE VALIDATION (best effort)
// - Preload alle images die je gebruikt
// - On error: console warning + placeholder in UI
// =====================================================
const missingImages = new Set();

function preloadImage(src){
  return new Promise((resolve) => {
    if(!src) return resolve(true);
    const im = new Image();
    im.onload = () => resolve(true);
    im.onerror = () => {
      missingImages.add(src);
      console.warn(`[QUIZ] Afbeelding ontbreekt: ${src}`);
      resolve(false);
    };
    im.src = src;
  });
}

async function validateImages(){
  const unique = new Set();
  PLAYERS.forEach(p => unique.add(p.photo));
  QUESTIONS.forEach(q => q.image && unique.add(q.image));
  unique.add("fam.jpg");

  // preload alles
  for(const src of unique){
    // eslint-disable-next-line no-await-in-loop
    await preloadImage(src);
  }

  if(missingImages.size){
    console.warn(`[QUIZ] Ontbrekende afbeeldingen (${missingImages.size}):`, [...missingImages]);
  }
}

// Render spelerskeuze
PLAYERS.forEach(p => {
  const d = document.createElement("div");
  d.className = "player";
  d.innerHTML = `
    <img src="${p.photo}" alt="${p.name}">
    <span>${p.name}</span>
  `;
  d.onclick = () => {
    document.querySelectorAll(".player").forEach(x => x.classList.remove("selected"));
    d.classList.add("selected");
    currentPlayer = p;
    startBtn.disabled = false;
  };
  playersEl.appendChild(d);
});

function show(view){
  [playerView, quizView, resultView].forEach(v => v.classList.remove("active"));
  view.classList.add("active");
}

function updateStats(){
  $("statQ").textContent = `${idx+1}/${QUESTIONS.length}`;
  $("statGood").textContent = state.filter(s => s.answered && s.correct).length;
  $("statBad").textContent  = state.filter(s => s.answered && !s.correct).length;
}

function escapeHtml(str){
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// ✨ UITLEG FORMATTER
// - ondersteunt bullets (regels die beginnen met "- ")
// - ondersteunt lege regels voor paragrafen
function formatUitleg(uitleg){
  if(!uitleg) return "<p>Geen extra uitleg bij deze vraag.</p>";

  const raw = String(uitleg).trim();
  const lines = raw.split("\n").map(l => l.trimEnd());

  const blocks = [];
  let currentParagraph = [];
  let currentList = [];

  const flushParagraph = () => {
    if(currentParagraph.length){
      blocks.push(`<p>${escapeHtml(currentParagraph.join(" ")).replaceAll("**","")}</p>`);
      currentParagraph = [];
    }
  };

  const flushList = () => {
    if(currentList.length){
      const items = currentList.map(li => `<li>${escapeHtml(li)}</li>`).join("");
      blocks.push(`<ul>${items}</ul>`);
      currentList = [];
    }
  };

  for(const line of lines){
    const trimmed = line.trim();

    if(trimmed === ""){
      flushList();
      flushParagraph();
      continue;
    }

    if(trimmed.startsWith("- ")){
      flushParagraph();
      currentList.push(trimmed.slice(2));
      continue;
    }

    // normale tekstregel
    flushList();
    currentParagraph.push(trimmed);
  }

  flushList();
  flushParagraph();

  // Kleine bonus: als iemand **bold** typte, strippen we dat (simpel)
  // (Je kunt dit later upgraden naar echte markdown als je wil.)
  return blocks.join("");
}

function showFeedback(isCorrect, q){
  feedbackBox.classList.remove("hidden");
  feedbackHead.classList.remove("good","bad");

  if(isCorrect){
    feedbackHead.textContent = "Goed! ✅";
    feedbackHead.classList.add("good");
  } else {
    const juiste = q.antwoorden[q.correctIndex];
    feedbackHead.textContent = `Fout ❌  (Juiste antwoord: ${juiste})`;
    feedbackHead.classList.add("bad");
  }

  feedbackBody.innerHTML = formatUitleg(q.uitleg);
}

function renderImage(src){
  if(!src){
    imgWrap.innerHTML = "";
    return;
  }

  if(missingImages.has(src)){
    imgWrap.innerHTML = `
      <div class="imgPlaceholder">
        <b>Afbeelding ontbreekt 😅</b>
        <small>Bestand niet gevonden: <code>${escapeHtml(src)}</code></small>
      </div>
    `;
    return;
  }

  imgWrap.innerHTML = `<img src="${src}" alt="Vraag afbeelding">`;
}

function renderQuiz(){
  if(idx >= QUESTIONS.length){
    renderResult();
    return;
  }

  show(quizView);

  const q = QUESTIONS[idx];
  const s = state[idx];

  qNr.textContent = `Vraag ${idx+1}`;
  qText.textContent = q.vraag;

  renderImage(q.image);

  // feedback reset
  feedbackBox.classList.add("hidden");
  feedbackHead.textContent = "";
  feedbackBody.innerHTML = "";

  // controls
  prevBtn.disabled = (idx === 0);
  nextBtn.disabled = !s.answered;

  // answers render
  answersEl.innerHTML = "";
  q.antwoorden.forEach((a, i) => {
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.type = "button";
    b.textContent = a;

    if(s.answered){
      b.disabled = true;
      if(i === q.correctIndex) b.classList.add("correct");
      if(s.selectedIndex === i && i !== q.correctIndex) b.classList.add("wrong");
    }

    b.onclick = () => {
      if(state[idx].answered) return;

      const correct = (i === q.correctIndex);
      state[idx] = { answered:true, correct, selectedIndex:i };

      nextBtn.disabled = false;
      updateStats();
      renderQuiz();
      showFeedback(correct, q);
    };

    answersEl.appendChild(b);
  });

  updateStats();

  // als al beantwoord: laat feedback zien
  if(s.answered){
    showFeedback(s.correct, q);
  }
}

function renderResult(){
  show(resultView);

  const good = state.filter(s => s.answered && s.correct).length;
  const bad  = state.filter(s => s.answered && !s.correct).length;

  $("resultSummary").textContent = `${currentPlayer.name}, je had ${good} goed en ${bad} fout 🎄`;

  // Toon medespelers alleen op het eind
  const othersEnd = $("othersEnd");
  othersEnd.innerHTML = "";

  PLAYERS.forEach(p => {
    const d = document.createElement("div");
    d.className = "otherCard" + (p === currentPlayer ? " you" : "");
    d.innerHTML = `
      <img src="${p.photo}" alt="${p.name}">
      <span>${p.name}</span>
    `;
    othersEnd.appendChild(d);
  });
}

// Controls
nextBtn.onclick = () => {
  if(!state[idx].answered) return;
  idx++;
  renderQuiz();
};

prevBtn.onclick = () => {
  if(idx === 0) return;
  idx--;
  renderQuiz();
};

startBtn.onclick = () => {
  idx = 0;
  state = QUESTIONS.map(() => ({ answered:false, correct:false, selectedIndex:null }));
  updateStats();
  renderQuiz();
};

// Start: validate images once (best effort)
validateImages();
