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
// ❓ VRAGEN – ALLEEN MULTIPLE CHOICE + UITLEG
// =====================================================
// =====================================================
const QUESTIONS = [
  {
    vraag: "Wat voor een soort boom is een kerstboom?",
    image: "kerstboom.jpg", // optioneel: "kerstboom.jpg"
    antwoorden: ["Spar", "Eik", "Denneboom", "Palmboom"],
    correctIndex: 0,
    uitleg:
`Kerstboomverkopers verkopen:
- de fijnspar
- de Nordmann-spar
- de Servische spar
  },


    {
    vraag: "Welke voetbalclub is dit?",
    image: "juventus.jpg",
    antwoorden: ["Ajax", "Juventus", "FC Barcalona", "Real Madrid"],
    correctIndex: 1,
    uitleg: "Dit is Juventus, een van de oudste voetbalclubs van Italië."
  },

    {
    vraag: "Welke voetbalclub is dit?",
    image: "fcutrecht.jpg",
    antwoorden: ["FC Groningen", "Real Madrid", "FC Utrecht", "FC Barcalona"],
    correctIndex: 2,
    uitleg: "Dit is FC UUUUUUUUUUtrecht"
  },


  
    {
    vraag: "Wie is dit?",
    image: "creeper.jpg",
    antwoorden: ["Mario", "Sonic", "Pikachu", "Creeper"],
    correctIndex: 3,
    uitleg: "Dit is een Creeper uit Minecraft. PAS OP! Hij kan exploderen"
  },
  
    {
    vraag: "Wie is dit?",
    image: "chimp.jpg",
    antwoorden: ["Henk Zegelaar", "tralalero tralala", "chimpanzini bananini", "Bokito"],
    correctIndex: 2,
    uitleg: "Dit is chimpanzini bananini een welbekend AI gegenereerd plaatje"
  },

      {
    vraag: "Wie is dit?",
    image: "haai.jpg",
    antwoorden: ["Reagea Shark", "Sharktale", "Tralalero tralala", "Jaws"],
    correctIndex: 2,
    uitleg: "Dit is Tralalero tralala een welbekend AI gegenereerd plaatje"
  },

        {
    vraag: "In welke film speelde deze knaap? (Zac Efron)",
    image: "zac.jpg",
    antwoorden: ["Harry Potter", "High School Musical", "Grease", "Jaws"],
    correctIndex: 1,
    uitleg: "Dit is chimpanzini bananini een welbekend AI gegenereerd plaatje"
  },

        {
    vraag: "In welke film speelde deze man?",
    image: "david.jpg",
    antwoorden: ["Dukes of Hazzard", "Flodder", "The Godfather", "Spongebob Squarepants"],
    correctIndex: 3,
    uitleg: "Aan het einde van de eerste spongebob film red David Hasstleoff Spongebob en Patrik door ze met zijn borst af te vuren naar de bodem van de zee, richting Bikinibroek"
  },

        {
    vraag: "Wie is het oudste",
    image: "boys.jpg",
    antwoorden: ["Luuk", "Ferran", "Richard", "Kaj"],
    correctIndex: 2,
    uitleg: "Rich is het oudste"
  },

        {
    vraag: "Wie is het jongste",
    image: "boys.jpg",
    antwoorden: ["Luuk", "Ferran", "Richard", "Kaj"],
    correctIndex: 2,
    uitleg: "Luuk is het jongste"
  },

  
  {
    vraag: "Wie is dit?",
    image: "mosterd.jpg",
    antwoorden: ["Messi", "Ronaldo", "Richard", "Arjen Robben"],
    correctIndex: 2,
    uitleg: "Richard met mosterd op zijn knie."
  },
  
  {
    vraag: "Wie is dit?",
    image: "eenoma.jpg",
    antwoorden: ["een papa", "een opa", "één oma", "een broer"],
    correctIndex: 2,
    uitleg: "Een oma kan goed dansen"
  },

    {
    vraag: "De rekening is €53,00",
    image: "eenoma.jpg",
    antwoorden: ["een papa", "een opa", "één oma", "een broer"],
    correctIndex: 2,
    uitleg: "Een oma kan goed dansen"
  },
  
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

  feedbackBody.textContent = q.uitleg ? q.uitleg : "Geen extra uitleg bij deze vraag.";
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
  imgWrap.innerHTML = q.image ? `<img src="${q.image}" alt="Vraag afbeelding">` : "";

  // feedback reset
  feedbackBox.classList.add("hidden");
  feedbackHead.textContent = "";
  feedbackBody.textContent = "";

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
