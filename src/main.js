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
  insertSection
} from './render';

import {
  filterElements,
  getCardData
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


const addEditBlock = getCardData().map(getAddEditMarkup);
insertSection(cardsPlace, addEditBlock, `beforeend`);

// cards

for (let i = 0; i < 3; i++) {
  const newCard = getCardData();
  const cardsTemplate = getMarkup(newCard, getCardTemplate);
  insertSection(cardsPlace, cardsTemplate, `beforeend`);
}

// add button 'load more'

addSection(cardsContainerPlace, `button`, null, `load-more`);
const button = document.querySelector(`.load-more`);
button.textContent = `load more`;
button.type = `button`;
