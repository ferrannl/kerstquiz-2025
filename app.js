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
// Voeg per vraag toe:
// - uitleg: "..." (mag lang, met zinnen/regels)
// =====================================================
const QUESTIONS = [
  {
    vraag: "Wat voor een soort boom is een kerstboom?",
    image: "", // optioneel: "kerstboom.jpg"
    antwoorden: ["Spar", "Eik", "Denneboom", "Palmboom"],
    correctIndex: 0,
    uitleg:
`Kerstboomverkopers verkopen anno 2013 voornamelijk:
- de fijnspar (Picea abies)
- de Nordmann-spar (Abies nordmanniana)
- de Servische spar (Picea omorika)
- de blauwspar (Picea pungens)
- de fraserspar (Abies fraseri)`
  },

  {
    vraag: "Welke planeet is dit?",
    image: "mars.jpg",
    antwoorden: ["Mars", "Jupiter", "Venus", "Saturnus"],
    correctIndex: 0,
    uitleg: "Dit is Mars. Je ziet hier de Valles Marineris (een gigantisch canyonsysteem)."
  }
];

// =====================================================

const $ = id => document.getElementById(id);

let currentPlayer = null;
let idx = 0;
// per vraag: {answered:boolean, correct:boolean, selectedIndex:number|null}
let state = QUESTIONS.map(() => ({ answered:false, correct:false, selectedIndex:null }));

// Views
const playerView = $("playerView");
const quizView   = $("quizView");
const resultView = $("resultView");

// UI
const playersEl = $("players");
const startBtn  = $("startBtn");

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
PLAYERS.forEach(p=>{
  const d = document.createElement("div");
  d.className = "player";
  d.innerHTML = `
    <img src="${p.photo}" alt="${p.name}">
    <span>${p.name}</span>
  `;
  d.onclick = ()=>{
    document.querySelectorAll(".player").forEach(x=>x.classList.remove("selected"));
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

function renderOtherPlayers(){
  const bar = $("othersBar");
  bar.innerHTML = "";
  PLAYERS.forEach(p=>{
    const d = document.createElement("div");
    d.className = "otherPlayer" + (p === currentPlayer ? " you" : "");
    d.innerHTML = `<img src="${p.photo}" alt="${p.name}"><span>${p.name}</span>`;
    bar.appendChild(d);
  });
}

function updateStats(){
  $("statQ").textContent = `${idx+1}/${QUESTIONS.length}`;
  $("statGood").textContent = state.filter(s=>s.answered && s.correct).length;
  $("statBad").textContent  = state.filter(s=>s.answered && !s.correct).length;
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

function render(){
  if(idx >= QUESTIONS.length){
    show(resultView);
    const good = state.filter(s=>s.answered && s.correct).length;
    const bad  = state.filter(s=>s.answered && !s.correct).length;
    $("resultSummary").textContent = `${currentPlayer.name}, je had ${good} goed en ${bad} fout 🎄`;
    return;
  }

  show(quizView);
  renderOtherPlayers();

  const q = QUESTIONS[idx];
  const s = state[idx];

  qNr.textContent = `Vraag ${idx+1}`;
  qText.textContent = q.vraag;
  imgWrap.innerHTML = q.image ? `<img src="${q.image}" alt="Vraag afbeelding">` : "";

  // reset feedback/next
  feedbackBox.classList.add("hidden");
  feedbackHead.textContent = "";
  feedbackBody.textContent = "";
  nextBtn.disabled = !s.answered;

  // vorige knop
  prevBtn.disabled = (idx === 0);

  // answers render
  answersEl.innerHTML = "";
  q.antwoorden.forEach((a, i) => {
    const b = document.createElement("button");
    b.className = "answerBtn";
    b.type = "button";
    b.textContent = a;

    // als al beantwoord: disable + highlight
    if(s.answered){
      b.disabled = true;
      if(i === q.correctIndex) b.classList.add("correct");
      if(s.selectedIndex === i && i !== q.correctIndex) b.classList.add("wrong");
    }

    b.onclick = () => {
      if(state[idx].answered) return;

      const correct = (i === q.correctIndex);
      state[idx] = { answered:true, correct, selectedIndex:i };

      // disable all buttons + highlight
      // (render opnieuw)
      nextBtn.disabled = false;
      updateStats();
      render();

      // na render: uitleg tonen
      showFeedback(correct, q);
    };

    answersEl.appendChild(b);
  });

  updateStats();

  // als al beantwoord: laat feedback direct zien
  if(s.answered){
    showFeedback(s.correct, q);
  }
}

// Controls
nextBtn.onclick = () => {
  if(!state[idx].answered) return;
  idx++;
  render();
};

prevBtn.onclick = () => {
  if(idx === 0) return;
  idx--;
  render();
};

startBtn.onclick = () => {
  idx = 0;
  state = QUESTIONS.map(() => ({ answered:false, correct:false, selectedIndex:null }));
  render();
};
