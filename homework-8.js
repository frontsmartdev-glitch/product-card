// 2 Создайте объект на основе ваших данных. Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений и так далее. Чем больше - тем лучше (но не увлекайтесь, до 10 максимум). Подберите правильное название для переменной.

const userProfile = {
    firstName: "Ilyas",
    lastName: "Kenceali",
    age: 31,
    job: "Web Developer",
    email: "frontsmartdev@gmail.com",
    country: "Ireland",
    city: "Kerry",
    relationshipStatus: "Single",
    hobbies: ["Coding", "Gaming", "Traveling", "Reading", "Coffee", "Football"],
    languages: ["Crimean-Tatar","Arabic","Ukrainian", "English", "Russian", "Turkish"],
};

console.log(userProfile);

// 3 Создайте объект, который будет хранить данные об автомобиле (марка, модель, год выпуска, цвет, вид коробки). Добавьте дополнительное свойство - владелец авто, значением которого будет ОБЪЕКТ, описанный в пункте №3. Желательно добавлять отдельной строкой (имеется ввиду не при создании объекта)

const car = {
    brand: "Audi",
    model: "A4",
    year: 2010,
    color: "Dark Gray",
    transmission: "Manual"
};

car.owner = userProfile;
console.log(car);

// 4 Написать функцию которая аргументом будет принимать объект, описанный в пункте №4. Она проверяет, есть ли в объекте свойство "максимальная скорость", если нет - добавляет его и задает значение, если есть - прекращает выполнение (ничего не делает)

function checkMaxSpeed(carObj) {
    if (!Object.hasOwn(carObj, "maxSpeed")) {
        carObj.maxSpeed = 240;
    }
} 

//5 Написать функцию, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта, которое нужно вывести и выводит его значение.

function showCarValue (object, property) {
    console.log(object[property]);
}

const carOwner = {
    brand: "Audi",
    model: "A4",
    year: 2020
};

showCarValue(carOwner, "model");

//6 Создать массив, который содержит названия продуктов (просто строки)
let vegetables = ["Картошка", "Огурец", "Помидор", "Капуста"];

// 8 Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) (3-5 книг). После, используя известный нам метод массив, добавить еще одну книгу в конец списка. Можете заменить книги на фильмы, или другую сущность, идею вы поняли.
let moviesJackieChan = [
    {
        title: "Кунг-фу жеребец",
        releaseYear: 2023,
        mainActor: "Джеки чан",
        director: "Ларри Ян",
        genre: "Комедия",
        duration: 120
    },
    {
        title: "Охота за тенью",
        releaseYear: 2025,
        mainActor: "Джеки чан",
        director: "Ларри Ян",
        genre: "Детектив",
        duration: 120
    },
    {
        title: "Иностранец",
        releaseYear: 2017,
        mainActor: "Джеки чан",
        director: "Мартин Кэмпбелл",
        genre: "Триллер",
        duration: 120
    }
];

    moviesJackieChan.push({
        title: "Земля: Один потрясающий день",
        releaseYear: 2018,
        mainActor: ["Роберт Редфорд","Джеки Чан"],
        director: ["Ричард Дэйл","Фань Лисинь", "Питер Уэббер"],
        genre: "Документальный",
        duration: 60
    }
);
console.log(moviesJackieChan);

// 9 Создать еще один массив, состоящих из тех же книг, но относящийся к определенной вселенной (Гарри Поттер, Марвел и так далее). (Если используете другую, свою сущность - импровизируйте). С помощью известного нам метода массива или оператора (рекомендую использовать оператор), объединить эти два массива в один

let moviesMarvel = [
    {
        title: "Железный человек",
        releaseYear: 2008,
        mainActor: "Роберт Дауни мл.",
        director: "Джон Фавро",
        genre: "Приключение",
        duration: 120
    },
    {
        title: "Первый мститель",
        releaseYear: 2011,
        mainActor: "Крис Эванс",
        director: "Джо Джонстон",
        genre: "Военный",
        duration: 120
    },
    {
        title: "Доктор Стрэндж",
        releaseYear: 2016,
        mainActor: "Бенедикт Камбербэтч",
        director: "Скотт Дерриксон",
        genre: "фантастика",
        duration: 120
    }
];

let allMovies = [
    ...moviesJackieChan,
    ...moviesMarvel
];

console.log(allMovies);


// 10 Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей с задания №9. Добавляем новое свойство для объекта "isRare (это редкий)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью), устанавливаем true или false. Что я хочу этим сказать: если книга выпущена позже 2000 года, устанавливаем true (да, это редкий), нет - false (значит это не редкий).

function addRareProperty(movies) {
    return movies.map(movie => {
    return { ...movie, isRare: movie.releaseYear > 2000 };
    });
}

let updatedMovies = addRareProperty(allMovies);

console.log(updatedMovies);
