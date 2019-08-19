// randomizers
const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getRandomItem = (array) =>
  array[Math.floor(Math.random() * array.length)];

const getRandomBool = (chance = 0.5) =>
  Math.random() > chance;

const getRandomValues = (array, num = 1) =>
  Array.from({length: num}, () => getRandomItem(array));

export {
  getRandomNumber,
  getRandomItem,
  getRandomBool,
  getRandomValues
};
