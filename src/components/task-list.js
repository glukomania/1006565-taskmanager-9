import AbstractComponent from "./abstract-component";

class TaskList extends AbstractComponent {
  getTemplate() {
    return `<div class="board__tasks"></div>`;
  }
}

export default TaskList;
