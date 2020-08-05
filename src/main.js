import {createBoardContainer} from "./view/board-container";
import {createBoardTasksContainer} from "./view/board-task-container";
import {createControlsContainer} from "./view/controls-container";
import {createEditCard} from "./view/edit-card";
import {createFilterList} from "./view/filter-list";
import {createLoadMoreButton} from "./view/load-more-button";
import {createSortList} from "./view/sort-list";
import {createTaskCard} from "./view/task-card";
import {render, loopHelper} from "./utils";

const TASK_CARDS_AMOUNT = 3;

const mainElement = document.querySelector(`.main`);
const mainControlsContainerElement = mainElement.querySelector(`.main__control`);
render(mainControlsContainerElement, createControlsContainer(), `beforeend`);

render(mainElement, createFilterList(), `beforeend`);
render(mainElement, createBoardContainer(), `beforeend`);

const siteBoardElement = mainElement.querySelector(`.board`);

if (siteBoardElement) {
  render(siteBoardElement, createSortList(), `beforeend`);
  render(siteBoardElement, createBoardTasksContainer(), `beforeend`);

  const siteBoardTasksElement = siteBoardElement.querySelector(`.board__tasks`);

  if (siteBoardElement) {
    render(siteBoardTasksElement, createEditCard(), `beforeend`);
    loopHelper(TASK_CARDS_AMOUNT, () => render(siteBoardTasksElement, createTaskCard(), `beforeend`));
  }

  render(siteBoardElement, createLoadMoreButton(), `beforeend`);
}

