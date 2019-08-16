import {
  menuTemplate,
  searchTemplate,
  getFilterTemplate,
  sortTemplate,
  getAddEditMarkup,
  getCardTemplate

} from './components/index';

import {
  getMarkup,
  addSection,
  insertSection,
  renderCards
} from './utils';

import {
  filterElements,
  cards
} from './data';


const menuPlace = document.querySelector(`.main__control`);
const sectionsPlace = document.querySelector(`.main`);

addSection(menuPlace, `section`, menuTemplate(), `control__btn-wrap`);
addSection(sectionsPlace, `section`, searchTemplate(), `main__search search container`);

// filters
const filterTemplate = getMarkup(filterElements, getFilterTemplate);
addSection(sectionsPlace, `section`, filterTemplate, `main__filter filter container`);

// sorting
addSection(sectionsPlace, `section`, sortTemplate(), `board container`);

// add-edit
const cardsContainerPlace = document.querySelector(`.board`);
addSection(cardsContainerPlace, `div`, null, `board__tasks`);
const cardsPlace = document.querySelector(`.board__tasks`);

let cardToEdit = [];
cardToEdit.push(cards[0]);
const addEditBlock = cardToEdit.map(getAddEditMarkup);
insertSection(cardsPlace, addEditBlock, `beforeend`);

// cards to show
let cardsToShow = renderCards(cards, 0, 5);
const cardsTemplate = getMarkup(cardsToShow, getCardTemplate);
insertSection(cardsPlace, cardsTemplate, `beforeend`);


// add button 'load more'

addSection(cardsContainerPlace, `button`, null, `load-more`);
const button = document.querySelector(`.load-more`);
button.textContent = `load more`;
button.type = `button`;


// Load more cards

const onLoadMoreClick = () => {
  let cardsNumber = cardsToShow.length;
  const moreCards = renderCards(cards, cardsNumber, 8);
  cardsNumber = cardsNumber + moreCards.length;
  const cardsTemplateMore = getMarkup(moreCards, getCardTemplate);
  insertSection(cardsPlace, cardsTemplateMore, `beforeend`);

  cardsToShow = renderCards(cards, 0, cardsNumber);
};

const onLoadMoreButton = document.querySelector(`.load-more`);
onLoadMoreButton.addEventListener(`click`, onLoadMoreClick);

