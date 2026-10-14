import { products } from './products.js';

const productTemplate = document.getElementById('product-template');
const productList = document.querySelector('.products__list');

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const titleToDescription = products.reduce((acc, product) => {
    acc.push({ [product.title]: product.description });
    return acc;
}, []);

console.log(titleToDescription);

// Задание функция 1 — спрашивает количество
function getCardsCount() {
    const answer = prompt('Сколько карточек отобразить? От 1 до 5');
    const count = Number(answer);

    if (!Number.isInteger(count) || count < 1 || count > 5) {
        alert('Нужно целое число от 1 до 5. Покажу все карточки.');
        return products.length;
    }

    return count;
}

// Задание 5: функция 2 — рисует карточки из переданного массива
function renderCards(items) {
    items.forEach(product => {
        const productClone = productTemplate.content.cloneNode(true);

        const image = productClone.querySelector('.product-card__image');
        image.src = product.image;
        image.alt = product.title;

        productClone.querySelector('.product-card__skin-type').textContent = product.skinType;
        productClone.querySelector('.product-card__title').textContent = product.title;
        productClone.querySelector('.product-card__description').textContent = product.description;
        productClone.querySelector('.product-card__price').textContent = `${product.price.toLocaleString('ru-RU')} ₽`;

        const compoundList = productClone.querySelector('.product-card__compound-list');
        product.compound.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            compoundList.appendChild(li);
        });

        productList.appendChild(productClone);
    });
}

const count = getCardsCount();
renderCards(products.slice(0, count));