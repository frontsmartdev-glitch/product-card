function showTemperature(city1, temperature2) { 
    console.log(`Сейчас в ${city1} температура —${temperature2}  градусов`);
    } 

showTemperature('Istanbul', +20);

const speedOfLight = 299792458;
    function checkSpeed(speed) {
        if (speed > speedOfLight) {
            console.log('Сверхсветовая скорость');
        } else if (speed < speedOfLight) {
            console.log('Субсветовая скорость');
        } else {
            console.log('Скорость света');
        }
    }

checkSpeed(500000000);  
checkSpeed(150000000);     
checkSpeed(299792458);      

const product = 'laptop';
const price = 1500;

    function checkBudget(budget) {
        if (budget > price) {
            console.log(`${product} приобретён. Спасибо за покупку!`);
        } else {
            console.log(`Вам не хватает ${price - budget}$, пополните баланс`);
        }
}

checkBudget(2000);
checkBudget(1000);

function showResult(footballer, time) {
    console.log(`${footballer} забил за ${time} секунд`);
}
showResult('Ronaldo', 58);

const country = Crimea;
let number = 6;
var isIsland = true;