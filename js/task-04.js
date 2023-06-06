const ValueSpan = document.querySelector('#value')
const btnDecrement = document.querySelector('[data-action=decrement]')

const btnIncrement = document.querySelector('[data-action=increment]')

btnDecrement.addEventListener('click', onDecrementClicked)

btnIncrement.addEventListener('click', onIncrementClicked)

let counterValue = 0;
function onDecrementClicked() {
    counterValue -= 1;
    ValueSpan.textContent = counterValue
};

function onIncrementClicked() {
    counterValue += 1;
ValueSpan.textContent = counterValue
};