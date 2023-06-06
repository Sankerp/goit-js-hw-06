const sizeControl = document.querySelector('#font-size-control')
const span = document.querySelector('#text')

sizeControl.addEventListener('input', event => {
    span.style.fontSize = `${event.target.value}px`;
});