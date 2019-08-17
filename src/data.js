import {
  countCards,
  getRandomNumber,
  getRandomItem,
  getRandomBool
} from "./utils";
import {TaskDay} from "./constants";

const repeatDayReducer = (days, day) => {
  days[day] = getRandomBool();
  return days;
};

const days = Object.values(TaskDay);
const getRepeatingDays = () => days.reduce(repeatDayReducer, {});
const setRepeatingDays = getRepeatingDays();

const descriptions = [
  `To study history`,
  `To make my hometasks`,
  `To get 100%`,
  `To feed the baby`,
  `To play with a cat`,
  `To buy some milk`,
  `To clean the room`
];
const tags = [`homework`, `theory`, `practice`, `cat`, `baby`, `js`, `work`];
const colors = [`black`, `yellow`, `blue`, `green`, `pink`];
const isFavorite = getRandomBool();
const isArchive = getRandomBool();

const getRandomValues = (array, num = 1) =>
  Array.from({length: num}, () => getRandomItem(array));

const getRandomTags = () =>
  new Set(getRandomValues(tags, getRandomNumber(1, 5)));


const makeTask = () => {
  return {
    description: getRandomItem(descriptions),
    dueDate: Date.now() - getRandomNumber(100000, 5000000),
    isRepeatingDays: true,
    repeatingDays: setRepeatingDays,
    tags: Array.from(getRandomTags()),
    color: getRandomItem(colors),
    isFavorite,
    isArchive,
  };
};

const getTasks = (num) =>
  new Array(num).fill(null).map(makeTask);

const cards = getTasks(50);

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

