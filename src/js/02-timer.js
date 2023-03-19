import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/material_green.css');

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  input: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.start.disabled = true;
let selectedDate = null;
let ms = null;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    refs.start.disabled = true;
    checkDate(selectedDates[0]);
  },
};

flatpickr(refs.input, options);

function checkDate(data) {
  selectedDate = new Date(data);
  const dateCurrent = new Date();
  if (selectedDate.getTime() < dateCurrent.getTime()) {
    Notify.failure('Please choose a date in the future');
  } else {
    refs.start.disabled = false;
  }
}

refs.start.addEventListener('click', onStartTimer);

function onStartTimer() {
  timerId = setInterval(() => {
      let currentDate = new Date();
      ms = selectedDate.getTime() - currentDate.getTime();
      if (ms > 0) {
        updateTimer();
      } else {
        Notify.success('Time is up');
        clearInterval(timerId);
      }
  }, 1000);
    refs.start.disabled = true;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateTimer() {
  const dateTime = convertMs(ms);
  refs.days.textContent = addLeadingZero(dateTime.days);
  refs.hours.textContent = addLeadingZero(dateTime.hours);
  refs.minutes.textContent = addLeadingZero(dateTime.minutes);
  refs.seconds.textContent = addLeadingZero(dateTime.seconds);
}

function addLeadingZero(value) {
    return value.toString().padStart(2, "0");
}
