const descriptions = [
  `Study history`,
  `Make my hometasks`,
  `Get 100%`,
];
const tags = [`homework`, `theory`, `practice`];
const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const isFavorite = false;
const isArchive = false;

const getRandomElement = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const getCardData = () => cardData;

const cardData = [
  {
    description: descriptions[getRandomElement(1, 3)],
    dueDate: parseInt(Date.now(), 10) - getRandomElement(100000, 1000000),
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
    tags,
    color: colors[getRandomElement(0, 5)],
    isFavorite,
    isArchive,
  }
];


export const filterElements = [
  {name: `All`, count: 13, isChecked: true},
  {name: `Overdue`, count: 0},
  {name: `Today`, count: 0},
  {name: `Favorites`, count: 1},
  {name: `Repeating`, count: 1},
  {name: `Tags`, count: 1},
  {name: `Archive`, count: 115},
];


export {
  getCardData};

