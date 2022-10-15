// import resolver from 'bower-npm-resolver';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const formRef = document.querySelector('form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  }, delay);
});
}

function onFormSubmit(event) {
  event.preventDefault();
  let {
    elements: { delay, amount, step },
  } = event.currentTarget;
  let delayRef = Number(delay.value);
  let stepRef = Number(step.value);
  let amountRef = Number(amount.value);
  
  for (let position = 0; position <= amountRef; position += 1){
    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log('success');
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log('error');
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayRef += stepRef;
  }
  event.currentTarget.reset();
  console.log('delay', delayRef);  
  console.log('step', stepRef);
  console.log('amount', amountRef);
}
formRef.addEventListener('submit', onFormSubmit)