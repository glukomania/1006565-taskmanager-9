// gets all html parts together
const getMarkup = (dataList, generator) => dataList.map(generator).join(`\n`);

// adds a new element to dom
const addSection = (container, element, html, className) => {
  const section = document.createElement(element);
  section.className = className;
  section.innerHTML = html;
  container.appendChild(section);
};

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

// insert a new block inside an existing selector
const insertSection = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

// creates an element and puts it to the dom
const createElement = (template, selector = `div`, classNames) => {
  const newElement = document.createElement(selector);
  if (classNames) {
    for (let item of classNames) {
      newElement.classList.add(item);
    }
  }
  newElement.innerHTML = template;
  return newElement;
};

// show only N cards
const renderCards = (array, startNumber, numberToAdd) => {
  const finishNumber = startNumber + numberToAdd + 1;
  return array.slice(startNumber + 1, finishNumber);
};

// removes the element from dom
const unrender = (element) => {
  if (element) {
    element.remove();
  }
};


export {
  getMarkup,
  addSection,
  createElement,
  insertSection,
  renderCards,
  unrender,
  Position
};
