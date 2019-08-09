import {
  menuTemplate,
  searchTemplate,
  getFilterTemplate,
  sortTemplate,
  addEditTemplate,
  getCardTemplate

} from './components/index';

import {
  getMarkup,
  addSection
} from './render';

import {
  filterElements,
  cardData
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
addSection(cardsContainerPlace, `div`, addEditTemplate, `board__tasks`);

// cards
const cardsTemplate = getMarkup(cardData, getCardTemplate);
const cardsPlace = document.querySelector(`.board__tasks`);
addSection(cardsPlace, `div`, cardsTemplate, `board__tasks`);

// add button 'load more'

addSection(cardsContainerPlace, `button`, null, `load-more`);
const button = document.querySelector(`.load-more`);
button.textContent = `load more`;
button.type = `button`;
