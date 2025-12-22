// app.js

// =====================================================
// 👤 SPELERS (LOKALE FOTO'S)
// =====================================================
const PLAYERS = [
  { name: "Kaj", photo: "kaj.gif" },
  { name: "Luuk", photo: "luuk.gif" },
  { name: "Ilonka", photo: "ilonka.gif" },
  { name: "Carmen", photo: "carmen.gif" },
  { name: "Ferran", photo: "ferran.gif" },
  { name: "Richard", photo: "richard.gif" }
];

// =====================================================
// ❓ VRAGEN
// =====================================================
const QUESTIONS = [

  { vraag:"Wie is het jongste?", image:"jong.jpg", antwoorden:["Luuk","Ferran","Richard","Kaj"], correctIndex:0, uitleg:"Luuk is het laatst van ons geboren." },
  { vraag:"Wie is het langste?", image:"lang.jpg", antwoorden:["Luuk","Ferran","Richard","Kaj"], correctIndex:1, uitleg:"Volgens Google is Richard slechts 1,73 m." },
  { vraag:"Wie is het oudste?", image:"oud.jpg", antwoorden:["Carmen","Ilonka","Richard","Ferran"], correctIndex:1, uitleg:"één oma is als eerste van ons geboren. Lang, lang geleden." },
  { vraag:"Van wie is dit skateboard?", image:"skateboard.jpg", antwoorden:["Richard","Luuk","Ferran","Kaj"], correctIndex:2, uitleg:"Oome Ferran natuurlijk" },
  { vraag:"Wie heeft deze kunstwerken gemaakt?", image:"tekening.jpg", antwoorden:["Richard","Luuk","Ferran","Kaj"], correctIndex:1, uitleg:"Luuk Van Gogh 👨‍🎨" },
  { vraag:"Wat is de lievelingskleur van Oome Ferran?", image:"zwart.jpeg", antwoorden:["Blauw","Wit","Zwart","Rood"], correctIndex:2, uitleg:"🖤 dezelfde kleur waar één oma van houdt." },
  { vraag:"Wie eet het gezondst?", image:"koken2.jpg", antwoorden:["Kaj","Richard","Luuk","Ilonka"], correctIndex:3, uitleg:"één oma is al meer dan 6kg afgevallen en past haar broeken niet meer! 👏" },
  {
    vraag:"Wat voor een soort boom is een kerstboom?",
    image:"kerstboom.jpg",
    antwoorden:["Spar","Palmboom","Eik","Denneboom"],
    correctIndex:0,
    uitleg:`In Nederland zijn kerstbomen meestal een spar.

Veel verkochte soorten:
- Fijnspar
- Nordmann-spar
- Servische spar`
  },
  { vraag:"Wat is de waarde van de banaan?", image:"fruit2.jpg", antwoorden:["5","6","7","8"], correctIndex:2, uitleg:"Druiven zijn 22. 22 − 15 = 7, dus de banaan is 7." },
  { vraag:"Wat is het juiste antwoord?", image:"fruit1.jpg", antwoorden:["18","19","20","21"], correctIndex:2, uitleg:"Uit de sommen volgt: sinaasappel = 9 en ananas = 11. Samen is dat 20." },

  { vraag:"Wat zijn dit?", image:"takis.jpg", antwoorden:["Doritos","Takis","Cheetos","Pringles"], correctIndex:1, uitleg:"Takis zijn pittige snacks, oome Ferran wilt ze al lang proberen." },
  { vraag:"Wat zijn dit?", image:"knikkers.jpg", antwoorden:["Kauwgomballen","IJsballetjes","Knikkers","Kralen"], correctIndex:2, uitleg:"Klassiek speelgoed, (helaas) nooit meer terug in de trend gekomen." },
  { vraag:"Wat is dit?", image:"fidgetspinner.jpg", antwoorden:["Slinky","Voetbal","Draaiketting","Fidget spinner"], correctIndex:3, uitleg:"Fidget spinners waren ineens overal." },
  { vraag:"Waar zijn deze wezens van?", image:"neopets.jpg", antwoorden:["Brainrot","Pokémon","Neopets","Club Penguin"], correctIndex:2, uitleg:"Mama Carmen vond dit geweldig. Neopets was een populaire online game waarin je digitale huisdieren verzorgde." },
  { vraag:"Hoeveel spelers staan er in één voetbalteam op het veld?", image:"voetbalteam.jpg", antwoorden:["10","11","12","13"], correctIndex:1, uitleg:"Een elftal = 11 spelers ⚽" },
  { vraag:"Wat gebeurt er bij buitenspel?", image:"buitenspel.jpg", antwoorden:["Vrije trap","Inworp","Spel wordt afgefloten","Penalty"], correctIndex:2, uitleg:"Bij buitenspel fluit de scheidsrechter het spel af. En wat gebeurt er dan...?" },
  { vraag:"Welke voetbalclub is dit?", image:"juventus.jpg", antwoorden:["Ajax","Juventus","FC Barcelona","Real Madrid"], correctIndex:1, uitleg:"Dit is Juventus, een van de bekendste clubs van Italië." },
  { vraag:"Welke voetbalclub is dit?", image:"fcutrecht.jpg", antwoorden:["FC Groningen","Real Madrid","FC Utrecht","FC Barcelona"], correctIndex:2, uitleg:"Dit is FC UUUUUUUUUUtrecht 😄" },
  { vraag:"Waar staat TOP Oss voor?", image:"toposs.jpg", antwoorden:["Trots Op Oss","Toppers Oss","Tot Ons Profijt Oss","Tot Ons Plezier Oss"], correctIndex:3, uitleg:"Leuk weetje: TOP Oss begon als TOP (1928), was FC Oss (2009–2018) en is weer TOP Oss." },
  { vraag:"Wie is dit?", image:"creeper.jpg", antwoorden:["Mario","Sonic","Pikachu","Creeper"], correctIndex:3, uitleg:"Dit is een Creeper uit Minecraft. Pas op… 💥 Hij explodeert" },
  { vraag:"Wie is dit?", image:"chimp.jpg", antwoorden:["Henk Zegelaar","tralalero tralala","chimpanzini bananini","Bokito"], correctIndex:2, uitleg:"Dit is ‘chimpanzini bananini’ — zo’n bekende meme/AI-afbeelding." },
  { vraag:"Wie is dit?", image:"haai.jpg", antwoorden:["Reagea Shark","Sharktale","Tralalero tralala","Jaws"], correctIndex:2, uitleg:"Dit is ‘Tralalero tralala’ — ook zo’n bekende meme/AI-afbeelding." },
  { vraag:"In welke film speelde hij?", image:"cars.gif", antwoorden:["Paw Patrol","Minecraft","Cars","Fast & the Furious"], correctIndex:2, uitleg:"Lightning McQueen hoort bij Cars 🏁" },
  { vraag:"In welke film speelde hij?", image:"zac.jpg", antwoorden:["Harry Potter","High School Musical","Gooise Vrouwen","Camp Rock"], correctIndex:1, uitleg:"Mama Carmen wilt deze films graag kijken. Zac Efron werd mega bekend door High School Musical." },
  { vraag:"In welke film speelde hij?", image:"david.jpg", antwoorden:["Dukes of Hazzard","Flodder","The Godfather","Spongebob Squarepants"], correctIndex:3, uitleg:"In de eerste SpongeBob-film komt David Hasselhoff (als zichzelf) te hulp." },
  { vraag:"Wat wordt hier overhandigd?", image:"zwem.jpg", antwoorden:["Veterstrikdiploma","Tandenpoets diploma","Zwemdiploma","HBO Diploma"], correctIndex:2, uitleg:"Zwemdiploma A is binnen!" },
  { vraag:"Welke oefening doet Kaj hier?", image:"borst.gif", antwoorden:["Rugslag","Vlinderslag","Borstcrawl","Schoolslag"], correctIndex:2, uitleg:"Borstcrawl.  Goede workout hoor!" },
  { vraag:"Wie is dit?", image:"mosterd.jpg", antwoorden:["Messi","Ronaldo","Richard","Arjen Robben"], correctIndex:2, uitleg:"Papa (Richard) met mosterd op zijn knie 😭" },
  {
    vraag:"Wanneer scoort Papa Richard de meeste goals?",
    image:"score.jpg",
    antwoorden:[
      "Als hij voor de wedstrijd chocola heeft gegeten",
      "Als hij voor de wedstrijd geen chocola heeft gegeten",
      "Als mama Carmen komt toeschouwen",
      "Als mama Carmen thuis blijft"
    ],
    correctIndex:3,
    uitleg:`Uit een verslag van DTV Nieuws: 'Carmen, blijf thuis!'

Carmen, de vrouw van Van der Venne, was niet bij de wedstrijd aanwezig omdat hun kindje ziek thuis zat. De interviewer concludeerde dat de middenvelder vaker tot score komt als zij er niet bij is. Dus is het advies van Van der Venne aan haar: 'Blijf thuis!'`
  },
  { vraag:"Wie is dit?", image:"eenoma.jpg", antwoorden:["een papa","een opa","één oma","een broer"], correctIndex:2, uitleg:"Een oma kan goed salsa dansen 💃" },
  { vraag:"Wie is dit?", image:"sleutels.jpg", antwoorden:["Carmen","Luuk","Richard","Ferran"], correctIndex:3, uitleg:"Sleutels, tekeningen, handschoenen… altijd 😅 Jullie moeten mij niet zo aflijden!" },
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
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function safeSetText(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = String(value);
}

function setNextLabel(){
  nextBtn.textContent = (currentIndex === QUESTIONS.length - 1) ? "RESULTAAT" : "VOLGENDE";
}

function getStillPhoto(photoPath){
  return String(photoPath || "").replace(/\.(gif|webp|png|jpg|jpeg)$/i, ".jpg");
}

// =====================================================
// 🎯 REGELS
// =====================================================
const NO_CHANGE_PLAYER = "Kaj";
const FERRAN = "Ferran";

// Timed = iedereen behalve Ferran
const TIMED_PLAYERS = new Set(PLAYERS.map(p => p.name).filter(n => n !== FERRAN));

const DEFAULT_LOCK_SECONDS = 5; // iedereen (timed)
const KAJ_LOCK_SECONDS = 15;    // Kaj

function isTimedPlayer(){
  return TIMED_PLAYERS.has(currentPlayer?.name || "");
}
function isNoChangePlayer(){
  return (currentPlayer?.name || "") === NO_CHANGE_PLAYER;
}
function getLockSecondsForPlayer(){
  const name = currentPlayer?.name || "";
  if(!isTimedPlayer()) return 0;
  if(name === "Kaj") return KAJ_LOCK_SECONDS;
  return DEFAULT_LOCK_SECONDS;
}

// ✅ we verbergen de knop tijdens lock voor iedereen die timed is
function shouldHideNextButtonDuringLock(){
  return isTimedPlayer(); // Ferran false
}

// =====================================================
// ✅ FADE-IN
// =====================================================
const FADE_PLAYERS = new Set(PLAYERS.map(p => p.name).filter(n => n !== FERRAN));
const FADE_DURATION_MS = 7700;
const KAJ_START_DELAY_MS = 2700;

function shouldFade(){
  return FADE_PLAYERS.has(currentPlayer?.name || "");
}
function getFadeStartDelay(){
  return (currentPlayer?.name || "") === "Kaj" ? KAJ_START_DELAY_MS : 0;
}

// =====================================================
// 📌 ELEMENTS
// =====================================================
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
const showAllBtn = $("showAllBtn");
const showWrongBtn = $("showWrongBtn");
const toTopBtn = $("toTopBtn");

const xmasPhoto = $("xmasPhoto");

// Lightbox
const lightbox = $("lightbox");
const lightboxImg = $("lightboxImg");
const lightboxClose = $("lightboxClose");

// =====================================================
// 🧠 STATE
// =====================================================
let currentPlayer = null;
let currentIndex  = 0;

let state = QUESTIONS.map(() => ({
  answered: false,
  pickedIndex: null,
  correct: false,
  nextReadyAt: null
}));

// =====================================================
// ⏱️ TIMERS
// =====================================================
let nextLockInterval = null;
let fadeTimeout = null;

function showNextButton(){
  if(!nextBtn) return;
  nextBtn.style.display = "";
  nextBtn.style.visibility = "";
}

function hideNextButton(){
  if(!nextBtn) return;
  nextBtn.style.display = "none";
}

function clearTimers(){
  if(nextLockInterval){ clearInterval(nextLockInterval); nextLockInterval = null; }
  if(fadeTimeout){ clearTimeout(fadeTimeout); fadeTimeout = null; }
  showNextButton();
  setNextLabel();
}

// ✅ Lock: knop is weg tijdens lock (5s voor iedereen, 15s Kaj)
function startNextLock(targetTimeMs){
  clearInterval(nextLockInterval);

  const tick = () => {
    const ms = targetTimeMs - Date.now();

    if(ms <= 0){
      clearInterval(nextLockInterval);
      nextLockInterval = null;

      showNextButton();
      setNextLabel();
      nextBtn.disabled = false;
      return;
    }

    nextBtn.disabled = true;

    if(shouldHideNextButtonDuringLock()){
      hideNextButton();
    } else {
      showNextButton();
      setNextLabel();
    }
  };

  tick();
  nextLockInterval = setInterval(tick, 250);
}

function applyNextLockIfNeeded(){
  const s = state[currentIndex];
  if(!isTimedPlayer()) return;

  if(s.answered){
    if(!s.nextReadyAt){
      const lockSeconds = getLockSecondsForPlayer();
      s.nextReadyAt = Date.now() + (lockSeconds * 1000);
    }
    if(s.nextReadyAt > Date.now()){
      startNextLock(s.nextReadyAt);
    }else{
      showNextButton();
      setNextLabel();
      nextBtn.disabled = false;
    }
  }
}

// =====================================================
// ✅ FADE-IN LOGIC
// =====================================================
function fadeMakeInvisibleNow(){
  if(!qImgEl) return;

  qImgEl.classList.remove("fade-init");
  qImgEl.style.transition = "";
  qImgEl.style.opacity = "";

  if(!shouldFade()){
    return; // Ferran -> direct zichtbaar
  }

  qImgEl.classList.add("fade-init");
  qImgEl.style.transition = "none";
  qImgEl.style.opacity = "0";
  void qImgEl.offsetWidth;
}

function fadeToVisible(){
  if(!qImgEl) return;
  if(!shouldFade()) return;

  qImgEl.style.transition = `opacity ${FADE_DURATION_MS}ms linear`;
  requestAnimationFrame(() => {
    qImgEl.style.opacity = "1";
  });
}

function scheduleFadeAfterStartDelay(){
  if(!shouldFade()) return;

  const delay = getFadeStartDelay();
  if(delay <= 0){
    fadeToVisible();
    return;
  }
  fadeTimeout = setTimeout(() => fadeToVisible(), delay);
}

// =====================================================
// ⚠️ LEAVE / REFRESH WARNING
// =====================================================
let quizStarted = false;

window.addEventListener("beforeunload", (e) => {
  if (!quizStarted) return;
  e.preventDefault();
  e.returnValue = "";
});

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

startBtn.onclick = () => startGame();

// =====================================================
// ▶️ GAME FLOW
// =====================================================
function startGame(){
  quizStarted = true;
  currentIndex = 0;

  state = QUESTIONS.map(() => ({
    answered: false,
    pickedIndex: null,
    correct: false,
    nextReadyAt: null
  }));

  youImg.src = getStillPhoto(currentPlayer?.photo) || "";
  youName.textContent = currentPlayer?.name || "Speler";

  show(quizView);
  renderQuestion();
  scrollToTop();
}

function renderQuestion(){
  clearTimers();

  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];

  statsEl.textContent = `Vraag ${currentIndex + 1} / ${QUESTIONS.length}`;
  qNrEl.textContent = `Vraag ${currentIndex + 1}`;
  qTextEl.textContent = q.vraag;

  fadeMakeInvisibleNow();

  qImgEl.onload = null;
  qImgEl.src = q.image || "";
  qImgEl.alt = q.vraag;

  qImgEl.onload = () => scheduleFadeAfterStartDelay();
  setTimeout(() => scheduleFadeAfterStartDelay(), 50);

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
    showFeedback(s.correct, q);
  }

  applyNextLockIfNeeded();
}

function pickAnswer(pickedIndex){
  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];

  // 🔒 Kaj: zodra gekozen -> niet meer wijzigen
  if(isNoChangePlayer() && s.answered) return;

  const isCorrect = pickedIndex === q.correctIndex;

  s.answered = true;
  s.pickedIndex = pickedIndex;
  s.correct = isCorrect;

  // ✅ lock start (5s iedereen, 15s Kaj)
  if(isTimedPlayer() && !s.nextReadyAt){
    const lockSeconds = getLockSecondsForPlayer();
    s.nextReadyAt = Date.now() + (lockSeconds * 1000);
  }

  paintAnsweredState();
  showFeedback(isCorrect, q);

  if(isTimedPlayer()){
    applyNextLockIfNeeded(); // knop verdwijnt tijdens lock
  }else{
    showNextButton();
    nextBtn.disabled = false;
    setNextLabel();
  }
}

function paintAnsweredState(){
  const q = QUESTIONS[currentIndex];
  const s = state[currentIndex];
  const btns = [...answersEl.querySelectorAll("button")];

  btns.forEach((b, idx) => {
    b.classList.remove("correct", "wrong", "selectedPick");

    if(s.answered && idx === q.correctIndex) b.classList.add("correct");
    if(s.answered && s.pickedIndex === idx && idx !== q.correctIndex) b.classList.add("wrong");
    if(s.answered && s.pickedIndex === idx) b.classList.add("selectedPick");

    const lockByKajRule = isNoChangePlayer() && s.answered;
    b.disabled = lockByKajRule;
  });
}

function showFeedback(isCorrect, q){
  feedbackEl.classList.remove("hidden");
  feedbackHead.textContent = isCorrect ? "✅ Goed!" : "❌ Fout!";
  feedbackHead.className = "feedbackHead " + (isCorrect ? "good" : "bad");

  const correct = q.antwoorden[q.correctIndex];
  const uitleg = q.uitleg ? `<p><b>Uitleg:</b> ${q.uitleg}</p>` : "";

  feedbackBody.innerHTML = `
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
  const s = state[currentIndex];
  if(!s.answered) return;

  if(isTimedPlayer() && s.nextReadyAt && s.nextReadyAt > Date.now()) return;

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
  clearTimers();
  show(resultView);

  const good = state.filter(s => s.answered && s.correct).length;
  const bad  = state.filter(s => s.answered && !s.correct).length;
  const total = QUESTIONS.length;

  const name = currentPlayer?.name || "Speler";
  safeSetText("resultSummary", `${name}, je had ${good} goed en ${bad} fout 🎄`);

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

    const correct = q.antwoorden[q.correctIndex];

    const badge = s.answered
      ? (s.correct ? `<span class="badge good">✅ Goed</span>` : `<span class="badge bad">❌ Fout</span>`)
      : `<span class="badge">Niet beantwoord</span>`;

    const row = document.createElement("div");
    row.className = "reviewRow";
    row.innerHTML = `
      <div class="reviewThumb">
        <img data-lightbox="1" src="${q.image || ""}" alt="Vraag ${i+1}">
      </div>
      <div class="reviewInfo">
        <h4>${i+1}. ${q.vraag}</h4>
        <div class="reviewMeta">
          ${badge}
          <span><b>Juiste antwoord:</b> ${correct}</span>
        </div>
        ${q.uitleg ? `<div class="smallNote" style="margin:8px 0 0; opacity:.95;"><b>Uitleg:</b> ${q.uitleg}</div>` : ""}
      </div>
    `;
    list.appendChild(row);
  });

  wireLightboxForReviewImages();
}

// =====================================================
// 🔍 LIGHTBOX
// =====================================================
function openLightbox(src, alt){
  if(!lightbox || !lightboxImg) return;
  lightboxImg.src = src;
  lightboxImg.alt = alt || "";
  lightbox.classList.remove("hidden");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox(){
  if(!lightbox || !lightboxImg) return;
  lightbox.classList.add("hidden");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
  lightboxImg.alt = "";
}

function wireLightboxForReviewImages(){
  const list = $("reviewList");
  if(!list) return;

  const imgs = list.querySelectorAll('img[data-lightbox="1"]');
  imgs.forEach(img => {
    img.onclick = () => openLightbox(img.getAttribute("src"), img.getAttribute("alt"));
  });
}

if(lightboxClose) lightboxClose.onclick = (e) => { e.stopPropagation(); closeLightbox(); };
if(lightbox) lightbox.onclick = () => closeLightbox();
document.addEventListener("keydown", (e) => {
  if(e.key === "Escape") closeLightbox();
});

if(youImg){
  youImg.style.cursor = "zoom-in";
  youImg.onclick = () => {
    if(youImg.src) openLightbox(youImg.src, currentPlayer?.name || "Speler");
  };
}

if(xmasPhoto){
  xmasPhoto.style.cursor = "zoom-in";
  xmasPhoto.onclick = () => openLightbox("xmas.jpg", "Kerst foto");
}

// =====================================================
// 🔁 RESTART + FILTERS + TOP
// =====================================================
restartBtn.onclick = () => {
  clearTimers();
  quizStarted = false;
  currentPlayer = null;
  startBtn.disabled = true;
  [...playersEl.children].forEach(c => c.classList.remove("selected"));
  show(playerView);
  scrollToTop();
};

if(showWrongBtn) showWrongBtn.onclick = () => buildReviewList({ onlyWrong:true });
if(showAllBtn)   showAllBtn.onclick   = () => buildReviewList({ onlyWrong:false });
if(toTopBtn)     toTopBtn.onclick     = () => scrollToTop();

renderPlayers();
