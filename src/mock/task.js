import {getRandomInt} from "./../utils";

const MAX_DATE_DAYS_GAP = 7;
const INITIAL_SCHEDULE = {
  'mo': false,
  'tu': false,
  'we': false,
  'th': false,
  'fr': false,
  'sa': false,
  'su': false,
};

const generateDescription = () => {
  const descriptionsArray = [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`,
  ];

  return descriptionsArray[getRandomInt(0, descriptionsArray.length - 1)];
};

const generateDueDate = () => {
  const isDeadline = Boolean(getRandomInt(0, 1));

  if (!isDeadline) {
    return null;
  }

  const currentDaysGap = getRandomInt(-MAX_DATE_DAYS_GAP, MAX_DATE_DAYS_GAP);
  const currentDate = new Date();

  currentDate.setHours(23, 59, 59, 999);
  currentDate.setDate(currentDate.getDate() + currentDaysGap);

  return new Date(currentDate);
};

const generateSchedule = () => {
  return {
    'mo': Boolean(getRandomInt(0, 1)),
    'tu': false,
    'we': Boolean(getRandomInt(0, 1)),
    'th': false,
    'fr': Boolean(getRandomInt(0, 1)),
    'sa': false,
    'su': Boolean(getRandomInt(0, 1)),
  };
};

const generateColor = () => {
  const colorsArray = [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ];

  return colorsArray[getRandomInt(0, colorsArray.length - 1)];
};

export const generateTask = () => {
  const dueDate = generateDueDate();
  return {
    description: generateDescription(),
    dueDate,
    schedule: dueDate === null ? generateSchedule() : INITIAL_SCHEDULE,
    color: generateColor(),
    isFavourite: Boolean(getRandomInt(0, 1)),
    isArchive: Boolean(getRandomInt(0, 1)),
  };
};
