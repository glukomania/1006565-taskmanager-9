import {createElement} from "../utils/dom";
import AbstractComponent from "./abstract-component";

class Sort extends AbstractComponent {
  constructor(selector, classNames, onChangeSort) {
    super();
    this._selector = selector;
    this._classNames = classNames;
    this._onChangeSort = onChangeSort;
    this._onSortClick = this._onSortClick.bind(this);
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate(), this._selector, this._classNames);
      const sortContainer = this._element.querySelector(`.board__filter-list`);
      sortContainer.addEventListener(`click`, this._onSortClick);
    }
    return this._element;
  }

  getTemplate() {
    return `
<div class="board__filter-list">
  <a href="#" class="board__filter" data-sort="default">SORT BY DEFAULT</a>
  <a href="#" class="board__filter" data-sort="up">SORT BY DATE up</a>
  <a href="#" class="board__filter" data-sort="down">SORT BY DATE down</a>
</div>
    `;
  }

  _onSortClick(evt) {
    const target = evt.target;
    this._onChangeSort(target.dataset.sort);
  }

}

export default Sort;
