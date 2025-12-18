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
  vraag: "Wat is: 1+0 ?",
  image: "",
  antwoorden: ["0", "1", "10", "11"],
  correctIndex: 1,
  uitleg: "Nul verandert niks."
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
  uitleg: "Takis zijn pittige snacks."
},

  {
  vraag: "Wat is dit?",
  image: "knikkers.jpg",
  antwoorden: ["Knikkers", "Kauwgomballen", "IJsballetjes", "Kralen"],
  correctIndex: 0,
  uitleg: "Klassiek speelgoedding, helaas nooit meer terug in de trent gekomen."
},
{
  vraag: "Wat is dit?",
  image: "fidgetspinner.jpg",
  antwoorden: ["Slinky", "Voetbal", "Draaiketting","Fidget spinner"],
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
  antwoorden: [
    "Vrije trap",
    "Inworp",
    "Spel wordt afgefloten",
    "Penalty"
  ],
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
    uitleg: "Van de oprichting in 1928 tot 1994 heette de club TOP, daarna heette de club tussen 2009 en 2018 FC Oss en sinds het seizoen 2018/19 heeft het de naam TOP Oss, zoals de club tussen 1994 en 2009 ook al heette. "
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
    vraag: "In welke film speelde hij?",
    image: "cars.jpg",
    antwoorden: ["Paw Patrol", "Minecraft", "Cars", "Fast & the Furious"],
    correctIndex: 2,
    uitleg:
'Iets over Cars, hoe heet die auto, lightning mcqueen'
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
  },
{
  vraag: "Wie vergeet altijd zijn spullen?",
  image: "sleutels.jpg",
  antwoorden: ["Carmen", "Luuk", "Richard", "Ferran"],
  correctIndex: 3,
  uitleg: "Sleutels, tekeningen, handschoenen… altijd 😅"
},
  
];

// =====================================================

const $ = (id) => document.getElementById(id);

let currentPlayer = null;
let idx = 0;
let state = QUESTIONS.map(() => ({ answered:false, correct:false, selectedIndex:null }));

// Views
const playerView = $("playerView");
const quizView   = $("quizView");
const resultView = $("resultView");

// Header
const topbar = $("topbar");

// Player UI
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

// Your profile
const youImg  = $("youImg");
const youName = $("youName");

// Result
const playAgainBtn = $("playAgainBtn");

// =====================================================
// 🔝 Scroll helper
// =====================================================
function scrollToTop(){
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =====================================================
// 🔍 Image check (best effort in browser)
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

  for(const src of unique){
    // eslint-disable-next-line no-await-in-loop
    await preloadImage(src);
  }
}

// =====================================================

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

// uitleg formatter
function formatUitleg(uitleg){
  if(!uitleg) return "<p>Geen extra uitleg bij deze vraag.</p>";

  const raw = String(uitleg).trim();
  const lines = raw.split("\n").map(l => l.trimEnd());

  const blocks = [];
  let currentParagraph = [];
  let currentList = [];

  const flushParagraph = () => {
    if(currentParagraph.length){
      const text = currentParagraph.join(" ").replaceAll("**", "");
      blocks.push(`<p>${escapeHtml(text)}</p>`);
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
    flushList();
    currentParagraph.push(trimmed);
  }

  flushList();
  flushParagraph();

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

  feedbackBox.classList.add("hidden");
  feedbackHead.textContent = "";
  feedbackBody.innerHTML = "";

  prevBtn.disabled = (idx === 0);
  nextBtn.disabled = !s.answered;

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

  if(s.answered){
    showFeedback(s.correct, q);
  }
}

function renderResult(){
  show(resultView);

  const good = state.filter(s => s.answered && s.correct).length;
  const bad  = state.filter(s => s.answered && !s.correct).length;

  $("resultSummary").textContent = `${currentPlayer.name}, je had ${good} goed en ${bad} fout 🎄`;

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

// =====================================================
// ✅ PLAYER RENDER (DIT IS WAARSCHIJNLIJK WAT JE MISTTE)
// =====================================================
playersEl.innerHTML = "";
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

// Controls
nextBtn.onclick = () => {
  if(!state[idx].answered) return;
  idx++;
  renderQuiz();
  scrollToTop();
};

prevBtn.onclick = () => {
  if(idx === 0) return;
  idx--;
  renderQuiz();
  scrollToTop();
};

startBtn.onclick = () => {
  idx = 0;
  state = QUESTIONS.map(() => ({ answered:false, correct:false, selectedIndex:null }));

  if(topbar) topbar.style.display = "none";

  youImg.src = currentPlayer.photo;
  youName.textContent = currentPlayer.name;

  updateStats();
  renderQuiz();
  scrollToTop();
};

playAgainBtn.onclick = () => {
  currentPlayer = null;
  startBtn.disabled = true;
  document.querySelectorAll(".player").forEach(x => x.classList.remove("selected"));

  if(topbar) topbar.style.display = "";
  show(playerView);
  scrollToTop();
};

validateImages();
