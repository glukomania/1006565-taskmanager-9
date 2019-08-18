import {
  countCards,
  getRandomNumber,
  getRandomItem,
  getRandomBool,
  getRandomValues,
  countCardsByDate
} from "./utils";
import {TaskDay} from "./constants";

// DAYS

const repeatDayReducer = (days, day) => {
  days[day] = getRandomBool();
  return days;
};
const days = Object.values(TaskDay);
const getRepeatingDays = () => days.reduce(repeatDayReducer, {});

// DESCRIPTIONS

const descriptions = [
  `To study history`,
  `To make my hometasks`,
  `To get 100%`,
  `To feed the baby`,
  `To play with a cat`,
  `To buy some milk`,
  `To clean the room`
];

// COLORS

const colors = [`black`, `yellow`, `blue`, `green`, `pink`];

// TAGS

const tags = [`homework`, `theory`, `practice`, `cat`, `baby`, `js`, `work`];
const getRandomTags = () =>
  new Set(getRandomValues(tags, getRandomNumber(1, 5)));

// DUEDATE

const getDueDate = () => {
  return Date.now() - getRandomNumber(0, 500000000) + getRandomNumber(0, 500000000);
};

// TASK TEMPLATE

const makeTask = () => ({
  description: getRandomItem(descriptions),
  dueDate: getDueDate(),
  repeatingDays: getRepeatingDays(),
  tags: Array.from(getRandomTags()),
  color: getRandomItem(colors),
  isFavorite: getRandomBool(),
  isArchive: getRandomBool(),
});

const getTasks = (num) =>
  new Array(num).fill(null).map(makeTask);

const tasks = getTasks(50);

// FILTERS

const filterElements = [
  {name: `All`, count: tasks.length, isChecked: true},
  {name: `Overdue`, count: countCardsByDate(tasks, `dueDate`, true)},
  {name: `Today`, count: countCardsByDate(tasks, `dueDate`, false)},
  {name: `Favorites`, count: countCards(tasks, `isFavorite`)},
  {name: `Repeating`, count: countCards(tasks, `isRepeatingDays`)},
  {name: `Tags`, count: tags.length},
  {name: `Archive`, count: countCards(tasks, `isArchive`)},
];


export {
  tasks,
  filterElements
};

