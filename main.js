'use strict'; //Чтобы JS работал в строгом режиме, что позволяет избежать ошибок в коде чтобы бил по рукам если что-то не так. Например, если вы случайно забыли объявить переменную, JS выдаст ошибку, а не создаст глобальную переменную.

// Покраска всех карточек в зеленый цвет

const productCards = document.querySelectorAll('.product-card');
const changeAllColorCardsButton = document.querySelector('#change-all-cards-color');
const goldColorHex = '#FFD700';
const aquaColorHex = '#00FFFF';

changeAllColorCardsButton.addEventListener('click', () => {
    productCards.forEach(card => {card.style.backgroundColor = goldColorHex;
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


// let str ='Hello Word'
// console.log(str. toLowerCase()) Делает все буквы в строке маленькими
// console.log(str)

// let a = 6
// let b = "2"
// console.log(a + b) Прикол в том, что JS складывает числа и строки, превращая число в строку. В итоге получается 62, а не 8

// let str = 'Hello Word'
// console.log(str.length) показывает количество символов в строке
// console.log(str.length-1) переход к предпослледнему символу строки
// console.log(str[0]) показывает первый символ строки
// console.log(str.trim()) убирает пробелы в начале и в конце строки

// console.dir(document) глубокий просмотр объекта document, можно увидеть все его свойства и методы
// console.log('<body>:', document.body) показывает тело документа')