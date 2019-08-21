import {createElement} from "../utils/dom";

class Menu {
  constructor(selector, className) {
    this._selector = selector;
    this._className = className;
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(), this._selector, this._className);
    }
    return this._element;
  }

  getTemplate() {
    return `
<input
    type="radio"
    name="control"
    id="control__new-task"
    class="control__input visually-hidden"
  />
  <label for="control__new-task" class="control__label control__label--new-task"
    >+ ADD NEW TASK</label
  >
  <input
    type="radio"
    name="control"
    id="control__task"
    class="control__input visually-hidden"
    checked
  />
  <label for="control__task" class="control__label">TASKS</label>
  <input
    type="radio"
    name="control"
    id="control__statistic"
    class="control__input visually-hidden"
  />
  <label for="control__statistic" class="control__label"
    >STATISTICS</label
  >`;
  }
}

export {Menu};

