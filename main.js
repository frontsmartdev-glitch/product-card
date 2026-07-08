// Покраска всех карточек в зеленый цвет

const productCards = document.querySelectorAll('.product-card');
const changeAllCardColorButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeAllCardColorButton.addEventListener('click', () => {
    productCards.forEach(card => {card.style.backgroundColor = greenColorHash;
    });
    });

// Покраска первой карточки

const firstProductCard = document.querySelector('.product-card');
const changeFirstCardColorButton = document.querySelector('#change-color-first-card');

changeFirstCardColorButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
});

// Открытие Google в новой вкладке

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click', openGoogle  
,);

function openGoogle() {
    const confirmOpen = confirm('Вы уверены, что хотите открыть Google?');
    
    if (confirmOpen === true) {
        window.open('https://www.google.com')
    } else {
        return;
    }
}

// Вывод в консоль лог

const outputToConsoleLogButton = document.querySelector('#output-to-console-log');

outputToConsoleLogButton.addEventListener('click', () => outputToConsoleLog('Homework: No6'));
    
function outputToConsoleLog(message) {
    alert(message);
    console.log(message);
}