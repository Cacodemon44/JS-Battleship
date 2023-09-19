var location1=3
var location2=4
var location3=5
var guess;
var hits=0;
var guesses=0;
var isSunk=false;
while isSunk==false; //пока корабль не потоплен
    guess=prompt("Ready,aim,fire!..please enter a number from 0 to 6:") //запрашиваем данные у пользвателя
    if (guess<0 || guess >6) {
        alert("please enter  number from 0 to 6"); } 
        else { 
        guesses=guesses+1;
        }
        if guess= location1 or location2 or location3 {
            hits=hits+1
        }
            if hits=3 {
                isSunk=true;
                alert ("The ship is destroyed");
            }

        