
var randomLoc=Math.floor(Math.random()*5); // возращает рандомное  значения от 0 до 1. Умножаем на 5, чтобы получить числа от 0,5 до 4,999
// Math.floor откругляет в меньшую сторону.
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits=0;
var guesses=0;
var isSunk=false;
while (isSunk==false)
    { //пока корабль не потоплен
        guess=prompt("Ready,aim,fire!..please enter a number from 0 to 6:"); //запрашиваем данные у пользвателя
    if (guess <0 || guess >6) 
        { //проверяем предположение пользователя
        alert("please enter  number from 0 to 6"); }
        else 
        { 
        guesses=guesses+1; // если цифры в диапазоне - добавляется значение к попыткам
            if (guess == location1 || guess == location2 || guess ==location3) 
        {
                   alert("HIT!");
                   hits=hits+1; //если пользователь попал, добавляется значение к попаданиям    
                if (hits==3) {
                isSunk=true;
                alert ("The ship is destroyed");} 
        }
            else {
                   alert ("MISS"); 
            }
        } 
     }
var stats = "You took " + guesses + " guesses to sink the battleship, " + 
"which means your shooting accuracy was " + (3/guesses); // Обратная связь. Вводится новая переменная,
// сообщающая пользователю информацию о факте его действий
alert(stats); //выводится значение данной переменной
        

