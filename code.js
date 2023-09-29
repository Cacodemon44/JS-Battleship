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

  function countPositivesSumNegatives(input) {
    let PosSum=0;
      let NegSum=0;
      let newArray= [];
      //   if (input.length!==0 || input!==null) 
           for (i=0;i<input.length;i++)
        { if (input[i]>0) {PosSum=PosSum+input[i];}
                      else if (input[i]<0) {NegSum=NegSum+input[i];}
      }  
            newArray.push[PosSum];
            newArray.push[NegSum];
           console.log(newArray);
           return newArray;
       
              }
             // else
    // return [];
//  }