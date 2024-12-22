//Zadaca 1
let hasCoffee = true;
let hasTea = false;
let hasMilk = true;

let result1= hasTea || hasMilk
console.log(result1)

let result2= hasCoffee && hasTea
console.log(result2)

let result3=!hasTea
console.log(result3)

let result4=(hasCoffee || hasMilk) != (hasCoffee && hasMilk)
console.log(result4)

let result5=(hasTea && hasMilk) || (hasCoffee && hasTea)
console.log(result5)

let result6=hasCoffee != hasTea
console.log(result6)

//Zadaca 2
const num1 = 10;
const num2 = 5;
const num3 = 8;
const num4 = 2;
const num5 = 12;
const num6 = 4;
const num7 = 3;

console.log(num1 + num2 * num5 / num6)
console.log((num2 * num3) / (num1 * num4) % num7)
console.log(num1 - num6 * num5 % num2)
console.log((num3 * num4 + num6) / (num1 * num5 - num2) % num7)
console.log(num1 - num5 * num7 +num6 %num2)

//Zadaca 3
let number1=12
let number2=4

let sum= number1 + number2
console.log(sum)

let diff=number1-number2
console.log(diff)

let mult=number1 * number2
console.log(mult)

let div=number1 / number2
console.log(div)

let rem=number1 % number2
console.log(rem)


