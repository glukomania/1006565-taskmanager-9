import AbstractComponent from "./abstract-component";

class Filter extends AbstractComponent {
  constructor({name, count}, selector) {
    super();
    this._name = name;
    this._count = count;
    this._section = selector;
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

export default Filter;
