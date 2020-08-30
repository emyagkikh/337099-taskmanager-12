import {createBoardContainer} from "./view/board-container";
import {createBoardTasksContainer} from "./view/board-task-container";
import {createControlsContainer} from "./view/controls-container";
import {createTaskEditTemplate} from "./view/task-edit";
import {createFilterList} from "./view/filter-list";
import {createLoadMoreButton} from "./view/load-more-button";
import {createSortList} from "./view/sort-list";
import {createTaskCard} from "./view/task";
import {render, generateLoop} from "./utils";
import {generateTask} from "./mock/task";
import {generateFilter} from "./mock/filter.js";

const TASK_CARDS_AMOUNT = 22;
const TASK_CARDS_AMOUNT_PER_STEP = 8;

const tasks = generateLoop(TASK_CARDS_AMOUNT, () => generateTask());

const filters = generateFilter(tasks);

const mainElement = document.querySelector(`.main`);
const mainControlsContainerElement = mainElement.querySelector(`.main__control`);
render(mainControlsContainerElement, createControlsContainer(), `beforeend`);

render(mainElement, createFilterList(filters), `beforeend`);
render(mainElement, createBoardContainer(), `beforeend`);

const siteBoardElement = mainElement.querySelector(`.board`);

if (siteBoardElement) {
  render(siteBoardElement, createSortList(), `beforeend`);
  render(siteBoardElement, createBoardTasksContainer(), `beforeend`);

  const siteBoardTasksElement = siteBoardElement.querySelector(`.board__tasks`);

  if (siteBoardElement) {
    render(siteBoardTasksElement, createTaskEditTemplate(tasks[0]), `beforeend`);
    generateLoop(Math.min(tasks.length, TASK_CARDS_AMOUNT_PER_STEP), (item, i) => {
      if (i === 0) {
        return null;
      }

      return render(siteBoardTasksElement, createTaskCard(tasks[i]), `beforeend`);
    });
  }

  if (tasks.length > TASK_CARDS_AMOUNT_PER_STEP) {
    let renderedTaskCount = TASK_CARDS_AMOUNT_PER_STEP;

    render(siteBoardElement, createLoadMoreButton(), `beforeend`);

    const loadMoreButton = siteBoardElement.querySelector(`.load-more`);

    loadMoreButton.addEventListener(`click`, (evt) => {
      evt.preventDefault();
      tasks
        .slice(renderedTaskCount, renderedTaskCount + TASK_CARDS_AMOUNT_PER_STEP)
        .forEach((task) => render(siteBoardTasksElement, createTaskCard(task), `beforeend`));

      renderedTaskCount += TASK_CARDS_AMOUNT_PER_STEP;

      if (renderedTaskCount >= tasks.length) {
        loadMoreButton.remove();
      }
    });
  }
}

