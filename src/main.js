import BoardController from "./components/board-controller";
import {tasks} from "./data";

const boardController = new BoardController(tasks);
boardController.init();
