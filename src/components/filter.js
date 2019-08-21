import {createElement} from "../utils/dom";


// const filterBlock = ({name, count = 0, isChecked = false}) => {
//   return `
//   <input
//   type="radio"
//   id="filter__${name.toLowerCase()}"
//   class="filter__input visually-hidden"
//   name="filter"
//   ${isChecked ? `checked` : ``}
//   />

//   <label for="filter__${name.toLowerCase()}" class="filter__label">
//   ${name.toUpperCase()}
//   <span class="filter__${name.toLowerCase()}-count">${count}</span>
//   </label>
// `;
// };

// const filterMarkup = getMarkup(filterElements, filterBlock);


class Filter {
  constructor({name, count}, selector) {
    this._name = name;
    this._count = count;
    this._element = null;
    this._section = selector;
  }

  getElement() {
    if (!this._element) {
      this._element = this.getTemplate();
    }
    return this._element;
  }

  getTemplate() {
    return `
    <input
    type="radio"
    id="filter__${this._name}"
    class="filter__input visually-hidden"
    name="filter"
    />

    <label for="filter__${this._name}" class="filter__label">
    ${this._name}
    <span class="filter__${this._name}-count">${this._count}</span>
    </label>
  `;
  }
}

export {Filter};
