// Покраска всех карточек в зеленый цвет

const productCards = document.querySelectorAll('.product-card');
const changeAllCardColorButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00FF00';
const blueColorHash = '#0000FF';

changeAllCardColorButton.addEventListener('click', () => {
    productCards.forEach(card => {card.style.backgroundColor = greenColorHash;
    });
    });


console.log('productCards', productCards)
// console.log('changeCardColorButton', changeCardColorButton)

const firstProductCard = document.querySelector('.product-card');
const changeFirstCardColorButton = document.querySelector('#change-color-first-card');

changeFirstCardColorButton.addEventListener('click', () => {
    firstProductCard.style.backgroundColor = blueColorHash;
});
