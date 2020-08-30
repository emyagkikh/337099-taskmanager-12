export const generateLoop = (amount, callback) => new Array(amount).fill(`*`).map(callback);

export const render = (container, template, place) => container.insertAdjacentHTML(place, template);

export const getRandomInt = (min, max) => {
  const currentMin = Math.ceil(min);
  const currentMax = Math.floor(max);
  const permissibleRange = Math.random() * (currentMax - currentMin + 1);
  return Math.floor(permissibleRange) + currentMin;
};

const getCurrentDate = () => {
  const currentDate = new Date();
  currentDate.setHours(23, 59, 59, 999);

  return new Date(currentDate);
};

export const isTaskExpired = (dueDate) => {
  if (dueDate === null) {
    return null;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() > dueDate.getTime();
};

export const isTaskExpiringToday = (dueDate) => {
  if (dueDate === null) {
    return false;
  }

  const currentDate = getCurrentDate();

  return currentDate.getTime() === dueDate.getTime();
};

export const isTaskRepeating = (repeating) => {
  return Object.values(repeating).some(Boolean);
};

export const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-US`, {day: `numeric`, month: `long`});
};
