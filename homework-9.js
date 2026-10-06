import { comments } from "./comments.js";

// Создать массив чисел от 1 до 10. Отфильтровать его таким образом, что бы мы получил массив чисел, начиная с 5.
const numbers = [1,2,3,4,5,6,7,8,9,10];
const numbersFromFive = numbers.filter( el=> el > 4);

console.log(numbersFromFive);

// Создать массив строк, относящихся к любой сущности (название фильмов/книг, кухонные приборы, мебель и т.д.), проверить, есть ли в массиве какая-то определенная сущность.
const films= ['Интерстеллар', 'Матрица', 'Дюна'];
const hasMatrix = films.includes('Матрица');

console.log(hasMatrix);


// Написать функцию, которая аргументом будет принимать массив и изменять его порядок на противоположный ("переворачивать") . Два вышеуказанных массива с помощью этой функции перевернуть.



function reverseArray(arr) {
    return arr.reverse();
}

const reversedNumbers = reverseArray(numbersFromFive);
const reversedFilms = reverseArray(films);

console.log(reversedNumbers);
console.log(reversedFilms);



// Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива. Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу. Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)
console.log(comments);



// Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const commentsWithCom = comments.filter(comment => comment.email.includes('.com'))
const commentsWithCom1 = comments.filter(comment => comment.email.includes('.com') &&  comment.postId === 1);
console.log(commentsWithCom)
console.log(commentsWithCom1)
