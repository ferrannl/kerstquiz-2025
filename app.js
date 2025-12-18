// =================== 1) VRAGEN AANPASSEN ===================
// image: plak een directe afbeelding-URL (https://...jpg/png/webp/gif)
// type: "mc" (meerkeuze) of "text" (open vraag)
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
// ============================================================

const el = (id) => document.getElementById(id);

// Views
const introView  = el("introView");
const quizView   = el("quizView");
const resultView = el("resultView");

// Bars
const statsBar  = el("statsBar");
const footerBar = el("footerBar");

// Intro
const startBtn  = el("startBtn");
const howBtn    = el("howBtn");
const miniNote  = el("miniNote");

// Quiz UI
const qNr      = el("qNr");
const qText    = el("qText");
const imgWrap  = el("imgWrap");
const answersEl= el("answers");
const hintEl   = el("hint");

// Stats
const statQ     = el("statQ");
const statGood  = el("statGood");
const statBad   = el("statBad");
const statScore = el("statScore");

// Footer buttons
const prevBtn  = el("prevBtn");
const nextBtn  = el("nextBtn");
const resetBtn = el("resetBtn");

// Results
const resultSummary = el("resultSummary");
const wrongList     = el("wrongList");
const restartBtn    = el("restartBtn");
const toIntroBtn    = el("toIntroBtn");

// App state
let mode = "intro"; // intro | quiz | result
let idx = 0;
// per vraag: { answered: bool, correct: bool, userAnswer: string }
let state = QUESTIONS.map(() => ({ answered:false, correct:false, userAnswer:"" }));

function norm(s){
  return (s ?? "")
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function setView(newMode){
  mode = newMode;

  introView.classList.toggle("active", mode === "intro");
  quizView.classList.toggle("active",  mode === "quiz");
  resultView.classList.toggle("active",mode === "result");

  // Stats + footer verbergen op intro
  const showBars = (mode === "quiz");
  statsBar.style.display  = showBars ? "flex" : "none";
  footerBar.style.display = showBars ? "flex" : "none";
}

function setImage(url){
  imgWrap.innerHTML = "";
  if(!url){
    imgWrap.innerHTML = `<div class="imgfallback">Geen afbeelding</div>`;
    return;
  }
  const img = document.createElement("img");
  img.alt = "Afbeelding bij de vraag";
  img.loading = "lazy";
  img.referrerPolicy = "no-referrer";
  img.src = url;

  img.onerror = () => {
    imgWrap.innerHTML = `<div class="imgfallback">
      Afbeelding kon niet laden.<br><br>
      Tip: gebruik een directe link naar een .jpg/.png/.webp/.gif
    </div>`;
  };
  imgWrap.appendChild(img);
}

function updateStats(){
  const good = state.filter(s => s.answered && s.correct).length;
  const bad  = state.filter(s => s.answered && !s.correct).length;
  const answered = state.filter(s => s.answered).length;
  const pct = answered ? Math.round((good / answered) * 100) : 0;

  statQ.textContent = `${Math.min(idx+1, QUESTIONS.length)}/${QUESTIONS.length}`;
  statGood.textContent = good;
  statBad.textContent = bad;
  statScore.textContent = `${pct}%`;
}

function renderQuiz(){
  if(idx >= QUESTIONS.length){
    showResults();
    return;
  }

  const q = QUESTIONS[idx];
  const s = state[idx];

  qNr.textContent = `Vraag ${idx+1} van ${QUESTIONS.length}`;
  qText.textContent = q.vraag;
  setImage(q.image);

  answersEl.innerHTML = "";
  nextBtn.disabled = !s.answered;

  if(q.type === "mc"){
    hintEl.textContent = s.answered
      ? "Antwoord opgeslagen. Je kunt nog wel terugkijken."
      : "Kies één antwoord. Daarna verschijnt “VOLGENDE”.";

    q.antwoorden.forEach((txt, i) => {
      const b = document.createElement("button");
      b.className = "answerBtn";
      b.type = "button";
      b.textContent = txt;

      if(s.answered){
        b.disabled = true;
        if(i === q.correctIndex) b.classList.add("correct", "reveal");
        if(norm(txt) === norm(s.userAnswer) && i !== q.correctIndex) b.classList.add("wrong");
      }

      b.onclick = () => {
        if(state[idx].answered) return;
        const isCorrect = (i === q.correctIndex);
        state[idx] = { answered:true, correct:isCorrect, userAnswer: txt };
        nextBtn.disabled = false;
        updateStats();
        renderQuiz();
      };

      answersEl.appendChild(b);
    });
  } else if(q.type === "text"){
    hintEl.textContent = s.answered
      ? "Antwoord opgeslagen. Je kunt nog wel terugkijken."
      : "Typ je antwoord en klik op “Bevestigen”.";

    const input = document.createElement("input");
    input.className = "textInput";
    input.type = "text";
    input.placeholder = "Typ je antwoord…";
    input.value = s.answered ? s.userAnswer : "";

    const confirm = document.createElement("button");
    confirm.className = "answerBtn";
    confirm.type = "button";
    confirm.textContent = "Bevestigen";

    const feedback = document.createElement("div");
    feedback.className = "hint";

    if(s.answered){
      input.disabled = true;
      confirm.disabled = true;
      feedback.innerHTML = s.correct
        ? `<span style="color:#8ff0c1;font-weight:800;">Goed!</span>`
        : `<span style="color:#ff9aa6;font-weight:800;">Fout.</span> Correct: <b>${q.correctText}</b>`;
    }

    confirm.onclick = () => {
      const ua = input.value;
      const isCorrect = norm(ua) === norm(q.correctText);
      state[idx] = { answered:true, correct:isCorrect, userAnswer: ua };
      nextBtn.disabled = false;
      updateStats();
      renderQuiz();
    };

    input.addEventListener("keydown", (e) => {
      if(e.key === "Enter" && !confirm.disabled) confirm.click();
    });

    answersEl.appendChild(input);
    answersEl.appendChild(confirm);
    answersEl.appendChild(feedback);
  }

  prevBtn.disabled = (idx === 0);
  updateStats();
}

function showResults(){
  setView("result");

  const good = state.filter(s => s.answered && s.correct).length;
  const bad  = state.filter(s => s.answered && !s.correct).length;
  const answered = state.filter(s => s.answered).length;
  const pct = answered ? Math.round((good / answered) * 100) : 0;

  resultSummary.textContent = `Je had ${good} goed en ${bad} fout. Score: ${pct}%.`;

  wrongList.innerHTML = "";
  const wrong = state
    .map((s, i) => ({ s, i, q: QUESTIONS[i] }))
    .filter(x => x.s.answered && !x.s.correct);

  if(wrong.length === 0){
    wrongList.innerHTML = `
      <div class="wrongItem">
        <b>Alles goed 🎄✨</b>
        <div class="kv">Geen foute antwoorden. Respect.</div>
      </div>`;
    return;
  }

  wrong.forEach(({s,i,q}) => {
    const correctText =
      q.type === "mc"
        ? q.antwoorden[q.correctIndex]
        : q.correctText;

    const item = document.createElement("div");
    item.className = "wrongItem";
    item.innerHTML = `
      <b>Vraag ${i+1}: ${q.vraag}</b>
      <div class="kv">Jouw antwoord: <span class="bad">${s.userAnswer || "—"}</span></div>
      <div class="kv">Correct: <span class="good">${correctText}</span></div>
    `;
    wrongList.appendChild(item);
  });
}

function resetAll(){
  state = QUESTIONS.map(() => ({ answered:false, correct:false, userAnswer:"" }));
  idx = 0;
  nextBtn.disabled = true;
  updateStats();
}

function startQuiz(){
  resetAll();
  setView("quiz");
  renderQuiz();
}

// ====== Events ======
startBtn.onclick = () => startQuiz();

howBtn.onclick = () => {
  miniNote.textContent =
    "Tip: Zet je vragen in js/app.js (QUESTIONS). Gebruik directe image-links (jpg/png/webp/gif).";
  window.setTimeout(() => (miniNote.textContent = ""), 4500);
};

nextBtn.onclick = () => {
  if(!state[idx]?.answered) return;
  idx++;
  renderQuiz();
};

prevBtn.onclick = () => {
  if(idx > 0){
    idx--;
    renderQuiz();
  }
};

resetBtn.onclick = () => {
  resetAll();
  renderQuiz();
};

restartBtn.onclick = () => startQuiz();

toIntroBtn.onclick = () => {
  setView("intro");
  miniNote.textContent = "";
};

// ====== Init ======
setView("intro");
updateStats();
