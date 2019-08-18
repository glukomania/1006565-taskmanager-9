import {
  getMenuTemplate,
  getSearchTemplate,
  getFilterTemplate,
  getSortTemplate,
  getAddEditTemplate,
  getCardTemplate
} from './components/index';

import {
  getMarkup,
  addSection,
  insertSection,
  renderCards
} from './utils/dom';

import {
  tasks
} from './data';

const menuPlace = document.querySelector(`.main__control`);
const sectionsPlace = document.querySelector(`.main`);

insertSection(menuPlace, getMenuTemplate());
addSection(sectionsPlace, `section`, getSearchTemplate(), `main__search search container`);

// filters
insertSection(sectionsPlace, getFilterTemplate());

// sorting
insertSection(sectionsPlace, getSortTemplate());

// add-edit
const cardsContainerPlace = document.querySelector(`.board`);
const contentContainer = document.createElement(`div`);
contentContainer.className = `board__tasks`;
cardsContainerPlace.appendChild(contentContainer);
const contentPlace = document.querySelector(`.board__tasks`);

let cardToEdit = [];
cardToEdit.push(tasks[0]);
const addEditBlock = cardToEdit.map(getAddEditTemplate);
insertSection(contentPlace, addEditBlock);

// cards to show
let cardsToShow = renderCards(tasks, 0, 5);
const cardsTemplate = getMarkup(cardsToShow, getCardTemplate);
insertSection(contentPlace, cardsTemplate);


// add button 'load more'
const button = document.createElement(`button`);
button.className = `load-more`;
cardsContainerPlace.appendChild(button);
const loadMore = document.querySelector(`.load-more`);
loadMore.textContent = `load more`;
loadMore.type = `button`;


// Load more cards

const onLoadMoreClick = () => {
  let cardsNumber = cardsToShow.length;
  const moreCards = renderCards(tasks, cardsNumber, 7);
  cardsNumber = cardsNumber + moreCards.length;
  const cardsTemplateMore = getMarkup(moreCards, getCardTemplate);
  insertSection(contentPlace, cardsTemplateMore);

  cardsToShow = renderCards(tasks, 0, cardsNumber);
  if (moreCards.length <= 7) {
    loadMore.style.visibility = `hidden`;
  }
};

const onLoadMoreButton = document.querySelector(`.load-more`);
onLoadMoreButton.addEventListener(`click`, onLoadMoreClick);

