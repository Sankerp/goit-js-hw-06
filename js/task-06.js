const input = document.querySelector('#validation-input')
input.addEventListener('blur', event => {
    let length = input.getAttribute('data-length')
    const valueLength = event.target.value.length;

    if (valueLength === Number(length)){
    input.classList.add("valid");
    input.classList.remove("invalid");
    } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
    }
    
})

