import {createElement} from "../utils/dom";
import AbstractComponent from "./abstract-component";

class StubMessage extends AbstractComponent {
  constructor(selector, classNames) {
    super();
    this._selector = selector;
    this._classNames = classNames;
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

export default StubMessage;
