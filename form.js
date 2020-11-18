const form = document.getElementById('form');
const userName = document.getElementById('userName');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const eventType = document.getElementById('eventType');
const date = document.getElementById('date');
const agree = document.getElementById('agree');

if(/Android/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
      if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
        document.activeElement.scrollIntoView();
      }
   })
 } 


form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs();
    errors = document.getElementsByClassName('error') // Cuenta los campos con error
    if (errors.length === 0){
        form.submit();
        // alert() o mensaje de que ya todo fue exitoso
        // limpiasForm()
    }
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const eventTypeValue = eventType.value.trim();
    const dateValue = date.value.trim();


    if (userNameValue === '') {
        setErrorFor(userName, 'Nombre no puede estar vacío');
    } else {
        setSuccessFor(userName);
    }
    if (mobileValue === '') {
        setErrorFor(mobile, 'Celular no puede estar vacío');
    } else {
        setSuccessFor(mobile);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email no puede estar vacío');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'No es un correo válido');
    } else {
        setSuccessFor(email);
    }
    if (eventTypeValue === '') {
        setErrorFor(eventType, 'Tipo de evento no puede estar vacío');
    } else {
        setSuccessFor(eventType);
    }
    if (dateValue === '') {
        setErrorFor(date, 'Tipo de evento no puede estar vacío');
    } else {
        setSuccessFor(date);
    }    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





