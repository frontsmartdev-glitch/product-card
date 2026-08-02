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
