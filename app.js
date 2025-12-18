// =====================================================
// ✅ HET ENIGE DAT JE MOET AANPASSEN VOOR NIEUWE VRAGEN
// =====================================================
const QUESTIONS = [
  {
    type: "mc",
    vraag: "Welke planeet is dit?",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Mars_Valles_Marineris.jpeg",
    antwoorden: ["Mars", "Jupiter", "Venus", "Saturnus"],
    correctIndex: 0
  },
  {
    type: "mc",
    vraag: "Welk dier zie je op de foto?",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Giraffe_Mikumi_National_Park.jpg",
    antwoorden: ["Olifant", "Giraf", "Zebra", "Nijlpaard"],
    correctIndex: 1
  },
  {
    type: "text",
    vraag: "Hoe heet de hoofdstad van Nederland?",
    image: "",
    correctText: "amsterdam"
  }
];
// =====================================================

const $ = id => document.getElementById(id);

let idx = 0;
let state = QUESTIONS.map(()=>({answered:false,correct:false}));

const intro  = $("introView");
const quiz   = $("quizView");
const result = $("resultView");

function show(view){
  [intro,quiz,result].forEach(v=>v.classList.remove("active"));
  view.classList.add("active");
}

function updateStats(){
  const good = state.filter(s=>s.correct).length;
  const bad  = state.filter(s=>s.answered&&!s.correct).length;
  $("statQ").textContent = `${idx+1}/${QUESTIONS.length}`;
  $("statGood").textContent = good;
  $("statBad").textContent = bad;
  $("statScore").textContent =
    Math.round((good/Math.max(1,good+bad))*100) + "%";
}

function render(){
  if(idx >= QUESTIONS.length){
    show(result);
    $("resultSummary").textContent =
      `Goed: ${state.filter(s=>s.correct).length} – Fout: ${state.filter(s=>s.answered&&!s.correct).length}`;
    return;
  }

  show(quiz);

  const q = QUESTIONS[idx];
  $("qNr").textContent = `Vraag ${idx+1}`;
  $("qText").textContent = q.vraag;
  $("imgWrap").innerHTML = q.image ? `<img src="${q.image}">` : "";

  const answers = $("answers");
  answers.innerHTML = "";

  if(q.type === "mc"){
    q.antwoorden.forEach((a,i)=>{
      const b = document.createElement("button");
      b.textContent = a;
      b.onclick = () => {
        state[idx] = {answered:true, correct:i===q.correctIndex};
        idx++;
        updateStats();
        render();
      };
      answers.appendChild(b);
    });
  } else {
    const input = document.createElement("input");
    const b = document.createElement("button");
    input.placeholder = "Typ je antwoord";
    b.textContent = "OK";

    b.onclick = () => {
      const ok = input.value.trim().toLowerCase() === q.correctText;
      state[idx] = {answered:true, correct:ok};
      idx++;
      updateStats();
      render();
    };

    answers.append(input,b);
  }
}

$("startBtn").onclick = () => {
  idx = 0;
  state = QUESTIONS.map(()=>({answered:false,correct:false}));
  updateStats();
  render();
};

$("restartBtn").onclick = () => location.reload();
