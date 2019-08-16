import {countCards} from "./utils";

const descriptions = [
  `Study history`,
  `Make my hometasks`,
  `Get 100%`,
];
const tags = [`homework`, `theory`, `practice`, `cat`, `baby`, `js`, `work`];
const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const isFavorite = true;
const isArchive = false;

const getRandomElement = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const card = {
  description: descriptions[getRandomElement(1, 3)],
  dueDate: parseInt(Date.now(), 10) - getRandomElement(100000, 5000000),
  isRepeatingDays: false,
  repeatingDays: {
    Mo: false,
    Tu: true,
    We: false,
    Th: false,
    Fr: false,
    Sa: false,
    Su: false
  },
  tags: [tags[getRandomElement(1, 3)], tags[getRandomElement(1, 3)], tags[getRandomElement(1, 3)]],
  color: colors[getRandomElement(0, 5)],
  isFavorite,
  isArchive,
};


const getAllCards = (cardArray) => {
  const cards = [];
  for (let i = 0; i < 15; i++) {
    cards.push(cardArray);
  }
  return cards;
};

const cards = getAllCards(card);

const filterElements = [
  {name: `All`, count: cards.length, isChecked: true},
  {name: `Overdue`, count: 0},
  {name: `Today`, count: 0},
  {name: `Favorites`, count: countCards(cards, `isFavorite`)},
  {name: `Repeating`, count: countCards(cards, `isRepeatingDays`)},
  {name: `Tags`, count: tags.length},
  {name: `Archive`, count: countCards(cards, `isArchive`)},
];


export {
  cards,
  filterElements
};

