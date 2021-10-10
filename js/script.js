//task1

//let x = 10;
//let y = 7;

//let result = x > y? alert(`x больше,чем y`): alert(`x меньше,чем y`);

//#task2

//let num = +prompt(`Введите число`);

//if (num % 2 === 0){
//    alert(`Число ${num} чётное`);
//}else{
//    alert(`Число ${num} нечётное`);
//}

//#3

//let num = prompt(`Введите целое число`);
//console.log(num.length);

//if (num > 0 ){
//    alert(`Число ${num} положительное, количество знаков: ${num.length}`);
//}else{
//    alert(`Число ${num} отрицательное, количество знаков: ${num.length}`);
//}

//#4

//let num1 = +prompt(`Введите число`);
//let num2 = +prompt(`Введите число`);
//let num3 = +prompt(`Введите число`);

//if (num1>num2 && num1>num3){
//    alert(`Максимальное число: ${num1}`);
//};

//if (num2>num1 && num2>num3){
//    alert(`Максимальное число: ${num2}`);
//};

//if (num3>num1 && num3>num2){
//    alert(`Максимальное число: ${num3}`);
//};

//#5

let a = +prompt(`Type a length of side:`);
let b = +prompt(`Type a length of side:`);
let c = +prompt(`Type a length of side:`);

if (a + b > c && c + b > a && a + c > b){
    alert(`Существует`);
}else{
    alert(`НЕ Существует`);
}
