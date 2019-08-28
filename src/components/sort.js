import {createElement} from "../utils/dom";
import AbstractComponent from "./abstract-component";

class Sort extends AbstractComponent {
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
<div class="board__filter-list">
  <a href="#" class="board__filter" data-sort="default">SORT BY DEFAULT</a>
  <a href="#" class="board__filter" data-sort="date-up">SORT BY DATE up</a>
  <a href="#" class="board__filter" data-sort="date-down">SORT BY DATE down</a>
</div>
    `;
  }
}

export default Sort;
