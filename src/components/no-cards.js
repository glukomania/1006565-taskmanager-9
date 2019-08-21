import {createElement} from "../utils/dom";

class NoCards {
  constructor(selector, classNames) {
    this._selector = selector;
    this._classNames = classNames;
    this._element = null;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(), this._selector, this._classNames);
    }
    return this._element;
  }

  getTemplate() {
    return `
    Congratulations, all tasks were completed! To create a new click on
    «add new task» button.
    `;
  }
}

export {NoCards};
