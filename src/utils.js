const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const castTimeFormat = (value) => {
  return value < 10 ? `0${value}` : String(value);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

const createElement = (template) => {
  const element = document.createElement(`div`);
  element.innerHTML = template;
  return element.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

export {formatTime, createElement, render, RenderPosition};
