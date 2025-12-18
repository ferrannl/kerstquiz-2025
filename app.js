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
let
