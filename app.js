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
// ❓ VRAGEN – ALLEEN MULTIPLE CHOICE
// =====================================================
const QUESTIONS = [
  {
    vraag: "Welke planeet is dit?",
    image: "mars.jpg",
    antwoorden: ["Mars", "Jupiter", "Venus", "Saturnus"],
    correctIndex: 0
  },
  {
    vraag: "Welk dier zie je hier?",
    image: "giraf.jpg",
    antwoorden: ["Zebra", "Giraf", "Olifant", "Leeuw"],
    correctIndex: 1
  }
];

// =====================================================

const $ = id => document.getElementById(id);

let currentPlayer = null;
let idx = 0;
let state = QUESTIONS.map(()=>({answered:false,correct:false}));

const playerView = $("playerView");
const quizView   = $("quizView");
const resultView = $("resultView");
const playersEl  = $("players");
const startBtn   = $("startBtn");

// Render spelerskeuze
PLAYERS.forEach(p=>{
  const d = document.createElement("div");
  d.className = "player";
  d.innerHTML = `<img src="${p.photo}"><span>${p.name}</span>`;
  d.onclick = ()=>{
    document.querySelectorAll(".player").forEach(x=>x.classList.remove("selected"));
    d.classList.add("selected");
    currentPlayer = p;
    startBtn.disabled = false;
  };
  playersEl.appendChild(d);
});

function show(view){
  [playerView,quizView,resultView].forEach(v=>v.classList.remove("active"));
  view.classList.add("active");
}

function renderOtherPlayers(){
  const bar = $("othersBar");
  bar.innerHTML = "";
  PLAYERS.forEach(p=>{
    const d = document.createElement("div");
    d.className = "otherPlayer" + (p === currentPlayer ? " you" : "");
    d.innerHTML = `<img src="${p.photo}"><span>${p.name}</span>`;
    bar.appendChild(d);
  });
}

function updateStats(){
  $("statQ").textContent = `${idx+1}/${QUESTIONS.length}`;
  $("statGood").textContent = state.filter(s=>s.correct).length;
  $("statBad").textContent  = state.filter(s=>s.answered&&!s.correct).length;
}

function render(){
  if(idx >= QUESTIONS.length){
    show(resultView);
    $("resultSummary").textContent =
      `${currentPlayer.name}, je had ${state.filter(s=>s.correct).length} goede antwoorden 🎄`;
    return;
  }

  show(quizView);
  renderOtherPlayers();

  const q = QUESTIONS[idx];
  $("qNr").textContent = `Vraag ${idx+1}`;
  $("qText").textContent = q.vraag;
  $("imgWrap").innerHTML = q.image ? `<img src="${q.image}">` : "";

  const answers = $("answers");
  answers.innerHTML = "";

  q.antwoorden.forEach((a,i)=>{
    const b = document.createElement("button");
    b.textContent = a;
    b.onclick = ()=>{
      state[idx] = {answered:true, correct:i===q.correctIndex};
      idx++;
      updateStats();
      render();
    };
    answers.appendChild(b);
  });

  updateStats();
}

startBtn.onclick = ()=>{
  idx = 0;
  state = QUESTIONS.map(()=>({answered:false,correct:false}));
  render();
};
