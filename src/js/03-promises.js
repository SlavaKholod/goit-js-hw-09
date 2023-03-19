import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputPromiseForm = document.querySelector('.form');
const formElement = inputPromiseForm.elements;
inputPromiseForm.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const delay = Number(formElement['delay'].value);
  const step = Number(formElement['step'].value);
  const amount = Number(formElement['amount'].value);
  for (let i = 1; i <= amount; i++) {
    if ((i === 1)) {
      createPromise(i, delay).then(onResolve).catch(onReject);
    } else {
      let totalDelay = delay + step *(i-1);
      createPromise(i, totalDelay).then(onResolve).catch(onReject);
    }
  }
}

function onResolve(resolve) {
  Notify.success(resolve);
}

function onReject(reject) {
  Notify.failure(reject);
}
