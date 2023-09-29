/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
8*/
function abbrevName(name){
    let first=name[0].toUpperCase();
    let space = name.indexOf(" ");
    let second=name[space+1].toUpperCase();
console.log(first+"."+second);
  return first+"."+second;
     }
abbrevName("hohn dead");

//другой вариант - через массив с разделителем по символу
function abbrevName(name){

    var nameArray = name.split(" ");
    console.log ( (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase()); // нулевая строка и нулевой элемент, потом первая строка и нулевой элемент
    
}
  abbrevName("hohn dead");