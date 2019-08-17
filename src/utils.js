// utility module

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


// insert a new block inside an existing selector
const insertSection = (container, template) => {
  container.insertAdjacentHTML(`beforeend`, template);
};

// count cards by filter parameter
const countCards = (array, key) => {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === true) {
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

export {
  addSection,
  getMarkup,
  insertSection,
  countCards,
  renderCards,
  getRandomNumber,
  getRandomItem,
  getRandomBool
};
