const input = document.getElementById('input');
const errorIcon = document.getElementById('error-icon');
const btnSubmit = document.getElementById('btn-submit');
const errorMsg = document.getElementById('error-msg');
const successMsg = document.getElementById('success-msg');
const email = document.getElementById('email');

//falla: se puede poner .co
const emailValidation = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


input.addEventListener('submit', e => {
    e.preventDefault();

    const data = new FormData(input);
    
    const [emails] = [...data.values()];
    
    if (!emailValidation.test(emails)){
        errorMsg.style.display = 'block';
        errorIcon.style.display = 'block';
        successMsg.style.display = 'none'
        email.style.borderColor = '#f96262'
    }else {
        console.log('enviado'); 
        errorMsg.style.display = 'none';
        errorIcon.style.display = 'none';
        successMsg.style.display = 'block'
        email.style.borderColor = ' #ce9797'
    }

});

