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

// show only N cards
const renderCards = (array, startNumber, numberToAdd) => {
  const finishNumber = startNumber + numberToAdd + 1;
  return array.slice(startNumber + 1, finishNumber);
};


export {
  getMarkup,
  addSection,
  insertSection,
  renderCards
};
