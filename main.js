'use strict'; //Чтобы JS работал в строгом режиме, что позволяет избежать ошибок в коде чтобы бил по рукам если что-то не так. Например, если вы случайно забыли объявить переменную, JS выдаст ошибку, а не создаст глобальную переменную.

// Покраска всех карточек в зеленый цвет

const productCards = document.querySelectorAll('.product-card');
const changeAllColorCardsButton = document.querySelector('#change-all-cards-color');
const goldColorHex = '#FFD700';
const aquaColorHex = '#00FFFF';

changeAllColorCardsButton.addEventListener('click', () => {
    productCards.forEach(card => {
        card.style.backgroundColor = goldColorHex;
    });
});

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeFirstCardColorButton = document.querySelector('#change-first-card-color');

changeFirstCardColorButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = aquaColorHex;
});

// Открытие Google в новой вкладке

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle,);

function openGoogle() {
    const confirmOpen = confirm('Вы уверены, что хотите открыть Google?');
    
    if (confirmOpen === true) {
        window.open('https://www.google.com');
    } else {
        return;
    }
}

// Вывод в консоль лог

const outputToConsoleLogButton = document.querySelector('#log-to-console');

outputToConsoleLogButton.addEventListener('click', () => outputToConsoleLog('Homework: No6'));
    
function outputToConsoleLog(message) {
    alert(message);
    console.log(message);
}

const productTitle = document.querySelector('.products__title');
productTitle.addEventListener('mouseover', (event) => {
    console.log(event.target.textContent);
});

const changeReturnColorButton = document.querySelector('#change-return-color');
changeReturnColorButton.addEventListener('click',  () => { 
    changeReturnColorButton.classList.toggle('active');
});