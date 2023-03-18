const refs = {
  body: document.body,
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
// console.log(refs);
let currentColor = '#ffffff';
let timerId = null;
refs.stop.disabled = true;

refs.start.addEventListener('click', () => {
  refs.start.disabled = true;
  if (timerId !== null) {
    return;
  } else {
    timerId = setInterval(() => {
      currentColor = getRandomHexColor();
      addColor();
      console.log(currentColor);
    }, 1000);
    refs.stop.disabled = false;
  }
});

refs.stop.addEventListener('click', onStopChangeColor);

function addColor() {
  refs.body.style.backgroundColor = currentColor;
}

function onStopChangeColor() {
  clearInterval(timerId);
  timerId = null;
  refs.start.disabled = false;
  refs.stop.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
