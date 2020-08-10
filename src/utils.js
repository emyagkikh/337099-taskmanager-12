const generateLoop = (amount, callback) => new Array(amount).fill(`*`).map(callback);

const render = (container, template, place) => container.insertAdjacentHTML(place, template);

const getRandomInt = (min, max) => {
  const currentMin = Math.ceil(min);
  const currentMax = Math.floor(max);
  const permissibleRange = Math.random() * (currentMax - currentMin + 1);
  return Math.floor(permissibleRange) + currentMin;
};

export {generateLoop, render, getRandomInt};
