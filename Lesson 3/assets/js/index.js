let btnSignIn, loginString, passwordString, notificationContainer, notificationContent;

function getElements() {
    btnSignIn = document.getElementById('sign-in');
    loginString = document.getElementById('login');
    passwordString = document.getElementById('password');
    notificationContent = document.getElementById('notification-content');
    notificationContainer = document.getElementById('notification-container');
}

function signIn() {
    if(loginString.value === ''){
        notificationContainer.classList.remove('hidden');
        notificationContent.innerText = 'Вы не ввели логин. Введите логин!';
        notificationContent.style.color = '#ff0000';
        setTimeout(function (){
            notificationContainer.classList.add('hidden');
        }, 1500);
    }
    else if(passwordString.value === ''){
        notificationContainer.classList.remove('hidden');
        notificationContent.innerText = 'Вы не ввели пароль. Введите пароль!';
        notificationContent.style.color = '#ff0000';
        setTimeout(function (){
            notificationContainer.classList.add('hidden');
        }, 1500);
    }
    else{
        notificationContainer.classList.remove('hidden');
        notificationContent.innerText = 'Вы успешно вошли в аккаунт!';
        notificationContent.style.color = '#00ff00';
        setTimeout(function (){
            notificationContainer.classList.add('hidden');
            location.href = 'https://google.com/';
        }, 1500);
    }
}

function init() {
    getElements();
    btnSignIn.addEventListener('click', signIn);
}

document.addEventListener('DOMContentLoaded', init);