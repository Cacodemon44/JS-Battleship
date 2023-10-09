function bark(name, weight) {
    if (weight > 20) {
    console.log(name + " says WOOF WOOF");
    } else {
    console.log(name + " says woof woof");
    }
   }
bark("rover", 23);
bark("spot", 13);
bark("spike", 53);
bark("lady", 17);

function whatShallIWear (temp) {
    if (temp<60) {
        console.log ("Wear a jacket");}
          else if (temp<70) {
                console.log ("Wear a sweater") }
                else { 
            console.log ("Wear t-shirt"); }
                     
        }
whatShallIWear (50);
whatShallIWear (80);    
whatShallIWear (60);

function doIt(param) {
    param = 2;
   }
   var test = 1;
   doIt(test);
   console.log(test);

// функция расчета площади круга по заданному радиусу

function calculateArea (r) { // 3й шаг - аргумент передается в функцию
var area; //4й шаг - вводится переменная, которая будет выводить результат. Начинает выполняться функция
if (r<=0) { return 0; //5-6 шаг - проверка нулевых значений и возврат результата 
}
else {area=Math.PI*r*r; //7 шаг - расчет в случае положительных значений
return area; // 8 шаг - функция возвращает численное значение и выполнение прекращается 
}
}
var radius=5.4; // 1 шаг - задается значечени радиуса (аргумент для параметра r в функции)
var theArea = calculateArea(radius); //2 шаг - значение радиуса передается функции 
//9 шаг - результат работы функции присваивается новой переменной theArea. 
console.log ("The area is: " + theArea); //10 шаг - вывод результата в консоль

// массивы

var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
var last = products[products.length-1];
var recent = products[last];
console.log(recent);

// упражнение - отчет
var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];
var i=0;
var output;
while (i<scores.length) 
{ output=("Bubble solution #"+ i + "score" + scores[i]);
console.log(output);
i=i+1;
}



var products = ["Choo Choo Chocolate",
"Icy Mint", "Cake Batter",
"Bubblegum"];
var i = 0;
var hasBubbleGum = [false,
    false,
    false,
    true];

while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
    console.log(products[i] + " contains bubble gum");
}
    i = i + 1; // !! цикл продолжается после закрытой фигурной скобки тела функции, а не внутри ее!
}

// проверка в каких сортах есть жевательная резинка ВЕРСИЯ 2 через FOR 
var products = ["Choo Choo Chocolate",
"Icy Mint", "Cake Batter",
"Bubblegum"];
var hasBubbleGum = [false,
    false,
    false,
    true];

for (var i=0; i < hasBubbleGum.length; i = i + 1) {
    if (hasBubbleGum[i])
        console.log(products[i] + " contains bubble gum");
}

// ДРУГОЙ ВАРИАНТ ДОСТУПА К СВОЙСТВАМ ОБЪЕКТА
// Another use of bracket notation on objects is to access a property which is stored as the value of a variable.
// This can be very useful for iterating through an object's properties or when accessing a lookup table.
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  
  const playerNumber = 16;  
  const player = testObj[playerNumber]; // будет искать в массиве переменную с именем 16 и присвоит ее значение player
  console.log(player);  // выведет присвоенное значение 

  function countSheeps(sheep) {
    let sum=0;
      for (i=0;i<sheep.length;i++)
      { 
        if (sheep[i]!==null || sheep[i]!==undefined) 
        {
          sum=sum+1;
                  } 
                }
                console.log(sum);
        return sum;
          }
         
  let sh=[1,2,,,3];
  countSheeps(sh);
/*
eturn an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/
  function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) { // сначала проверяется базовое условие - не равно ли null или пустому массиву
      return []; 
    }
    let posCount = 0;
    let negSum = 0;
    for (let i = 0; i < input.length; i++) {
       if (input[i] > 0) {
        posCount++;
      } else {
        negSum += input[i];
      }
    }
    return [posCount, negSum];
  }
  let input=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
                     countPositivesSumNegatives(input);

function greet(name){
                        return ("Hello, ") + name ("how are you doing today?");
                      }
 function maps(x) {
                        let newArr=[];
                          for (i=0;i<x.length;i++) {
                            newArr[i]=x[i]*x[i];                  
                          }
                          console.log(newArr);
                          return newArr;
                        }            
                        maps([1,2,3]);

  //получение первого символа строки и преобразование его в число
  function getAge(inputString){
    return number(inputString[0]);
    }
// функция includes  проверяет наличие элемента в массиве. Если он есть возвращает true. Если нет false.
// сокращенный вариант написания true false!
    function check(a, x) {
        console.log(a.includes(x));
        return a.includes(x)
        }
    check([1,2],0);

    function century(year) {
        let a=String(year)
        if (a[2]+a[3]=="00") 
        {console.log(a[0]+a[1]); 
        return a}
        else {
        console.log(Number(a[0]+a[1])+1);
        return Number(a[0]+a[1])+1; }
      }
      century(1901);
//* given a string of words, return the length of the shortest word(s).
      function findShort(s){
        let arrayOfStrings = s.split(" ");
        let newArray=[];
        for(let i = 0; i < arrayOfStrings.length; i++)
          newArray[i]=arrayOfStrings[i].length; // присвоение новому массиву длины строк предыдущего
           newArray.sort((a, b) => a - b); // сортировка по возрастанию чисел в новом массиве
                       
return newArray[0]
 }
      findShort("asd ee d");
//* given a string of words, return the length of the shortest word(s).Версия 2. 
      function findShort(s){
        var arr = s.split(' ');
        var min = arr[0].length;
        for (var i = 1; i < arr.length; i++) {
          if (arr[i].length < min) {
            min = arr[i].length;
          }
        }
        return min
      }

      // записать строку в обратном порядке

      function solution(str){
        return str.split("").reverse().join(""); // split - разделяет на массив, reverse - переворачиывает join - снова делает массив 
      }


      function getMiddle(s)
      {
        let arrLetters=s.split("");
        console.log(arrLetters);
        let i=arrLetters.length/2;
        if (arrLetters.length % 2==0) {
          console.log (arrLetters[i-1]+arrLetters[i]);
           return arrLetters[i]+arrLetters[i+1];}
        else
        console.log (arrLetters[Math.ceil(i-1)]);
          {return arrLetters[Math.ceil(i-1)];}
        
      }
      getMiddle("qwertye");
// более элегантное решение - через slice. 
      function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

function positiveSum(arr) {
  let sum=0;
  for (let i=0; i<arr.length; i++) 
    if (arr[i]<0) sum=sum+arr[i];
    return sum
}

function repeatStr (n, s) {
  for (let i=1;i<n;i++) {s++} 
  return s;
}
// удалить все пробелы из строки и вывести строку без пробелов
function noSpace(x){
  return  x.split(" ").join("")
  }

// версия 2

function noSpace(x) {
  return x.replaceAll(' ', ''); // replaceAll - все пробелы
}