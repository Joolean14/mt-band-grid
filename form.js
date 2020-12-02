const form = document.getElementById('form');
const userName = document.getElementById('userName');
const mobile = document.getElementById('mobile');
const email = document.getElementById('email');
const eventType = document.getElementById('eventType');
const date = document.getElementById('date');
const agree = document.getElementById('agree');

form.addEventListener('submit', e => {
    e.preventDefault()
    checkInputs();
    errors = document.getElementsByClassName('error');
    if (errors.length === 0){
        form.submit();
        form.reset();
        return false;
    }
});

function checkInputs() {
    const userNameValue = userName.value.trim();
    const mobileValue = mobile.value.trim();
    const emailValue = email.value.trim();
    const eventTypeValue = eventType.value.trim();
    const dateValue = date.value.trim();

    if (userNameValue === '' ) {
        setErrorFor(userName);
    } else {
        setSuccessFor(userName);
    }
    if (mobileValue === '') {
        setErrorFor(mobile);
    } else {
        setSuccessFor(mobile);
    }
    if (!isEmail(emailValue)) {
        setErrorFor(email);
    } else {
        setSuccessFor(email);
    }
    if (eventTypeValue === '') {
        setErrorFor(eventType);
    } else {
        setSuccessFor(eventType);
    }
    if (dateValue === '') {
        setErrorFor(date);
    } else {
        setSuccessFor(date);
    }    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) 
{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}













