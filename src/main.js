import {menuMarkup} from "./components/menu-markup.js";
import {searchMarkup} from "./components/search-markup.js";
import {filterMarkup} from "./components/filter-markup.js";
import {sortMarkup} from "./components/sort-markup.js";
import {addEditMarkup} from "./components/add-edit-markup.js";
import {cardsMarkup} from "./components/card-markup.js";


// function that adds a new element with inner html

const menuPlace = document.querySelector(`.main__control`);
const sectionsPlace = document.querySelector(`.main`);
const addSection = (container, element, html, className) => {
  const section = document.createElement(element);
  section.className = className;
  section.innerHTML = html;
  container.appendChild(section);
};


addSection(menuPlace, `section`, menuMarkup(), `control__btn-wrap`);
addSection(sectionsPlace, `section`, searchMarkup(), `main__search search container`);
addSection(sectionsPlace, `section`, filterMarkup, `main__filter filter container`);
addSection(sectionsPlace, `section`, sortMarkup(), `board container`);

const cardsContainerPlace = document.querySelector(`.board`);
addSection(cardsContainerPlace, `div`, addEditMarkup, `board__tasks`);

const cardsPlace = document.querySelector(`.board__tasks`);
addSection(cardsPlace, `div`, cardsMarkup, `board__tasks`);

// add button 'load more'

addSection(cardsContainerPlace, `button`, null, `load-more`);
const button = document.querySelector(`.load-more`);
button.textContent = `load more`;
button.type = `button`;
