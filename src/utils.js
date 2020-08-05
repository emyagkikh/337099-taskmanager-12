const loopHelper = (amount, callback) => new Array(amount).fill(`*`).map(callback);

const render = (container, template, place) => container.insertAdjacentHTML(place, template);

export {loopHelper, render};
