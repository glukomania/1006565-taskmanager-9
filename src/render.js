// utility module

// gets all html parts together
const getMarkup = (dataList, generator) => dataList.map(generator).join(`\n`);

// adds a new element to dom
const addSection = (container, element, html, className) => {
  const section = document.createElement(element);
  section.className = className;
  section.innerHTML = html;
  container.appendChild(section);
};

export {addSection, getMarkup};
