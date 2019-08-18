// utility module

import {getFullTaskDate} from "./components/card-date";

// randomizers
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getRandomBool = (chance = 0.5) =>
  Math.random() > chance;


// gets all html parts together
const getMarkup = (dataList, generator) => dataList.map(generator).join(`\n`);

// adds a new element to dom
const addSection = (container, element, html, className) => {
  const section = document.createElement(element);
  section.className = className;
  section.innerHTML = html;
  container.appendChild(section);
};

const getRandomValues = (array, num = 1) =>
  Array.from({length: num}, () => getRandomItem(array));

// insert a new block inside an existing selector
const insertSection = (container, template) => {
  container.insertAdjacentHTML(`beforeend`, template);
};

// count cards by filter parameter
const countCards = (array, key) => {
  let counter = 0;
  for (let item of array) {
    if (item[key] === true) {
      counter++;
    }
  }
  return counter;
};

// show only N cards
const renderCards = (array, startNumber, numberToAdd) => {
  const finishNumber = startNumber + numberToAdd + 1;
  return array.slice(startNumber + 1, finishNumber);
};

const checkTrueInArray = (object) => {
  for (const key in object) {
    if (object[key] === true) {
      return true;
    }
  }
  return false;
};

const countCardsByDate = (array, key, isOverDue) => {
  let counter = 0;
  const todayDate = new Date();
  for (let item of array) {
    if (isOverDue) {
      if (getFullTaskDate(item[key]) < getFullTaskDate(todayDate)) {
        counter++;
      }
    } else {
      if (getFullTaskDate(item[key]) === getFullTaskDate(todayDate)) {
        counter++;
      }
    }
  }
  return counter;
};

export {
  addSection,
  getMarkup,
  insertSection,
  countCards,
  renderCards,
  getRandomNumber,
  getRandomItem,
  getRandomBool,
  checkTrueInArray,
  countCardsByDate,
  getRandomValues
};
