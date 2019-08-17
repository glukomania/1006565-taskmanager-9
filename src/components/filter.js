import {getMarkup} from "../utils";
import {filterElements} from "../data";

const filterBlock = ({name, count = 0, isChecked = false} = {}) => {
  const id = name.toLowerCase();
  return `
  <input
  type="radio"
  id="filter__${id}"
  class="filter__input visually-hidden"
  name="filter"
  ${isChecked ? `checked` : ``}
  />

  <label for="filter__${id}" class="filter__label">
  ${name.toUpperCase()}
  <span class="filter__${id}-count">${count}</span>
  </label>
`;
};

const filterMarkup = getMarkup(filterElements, filterBlock);

const getFilterTemplate = () => {
  return `
<section class="main__filter filter container">
  ${filterMarkup}
</section>`;
};

export {getFilterTemplate};
