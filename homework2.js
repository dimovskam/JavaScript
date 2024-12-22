//Zadaca 1
let globalNum = 10

function checkScope() {
    console.log(globalNum)
}

checkScope()
let localNum=10

function checkScope() {
    let localNum = globalNum 
    console.log(localNum)
}
checkScope()
console.log(globalNum === localNum)

if (true) {
    let blockNum = 10
}
console.log(typeof blockNum)


//Zadaca 2
let score=78

if(score >=90 && score <=100){
    console.log("Grade:A")
}else if(score >=80 && score <=89){
    console.log("Grade:B")
}else if(score >=70 && score <=79){
    console.log("Grade:C")
}else if(score >=60 && score <=69){
    console.log("Grade:D")
}else if(score >=0 && score <=59){
    console.log("Grade:F")
}else {
    console.log("Invalid score!")
}

let dayNumber=6
switch(dayNumber){
    case 1:
        console.log("The day is Sunday")
    break
    case 2:
        console.log("the day is Monday")
    break
    case 3:
        console.log("The day is Tuesday")
    break
    case 4:
        console.log("The day is Wednesday")
    break
    case 5:
        console.log("The day is Thursday")
    break
    case 6:
        console.log("The day is Friday")
    break
    case 7:
        console.log("The day is Saturday")
    break
    default:
        console.log("Invalid day number")
}

//Zadaca 3
let num1=7
let num2=9
let  num3=11

function sum(num1, num2, num3){
    return sum
}

console.log(num1, num2, num3)

function greet (string){
return string
}
let note = greet("Hello, Sunday")
console.log(note)

let numb1=10
let numb2=18


function comparation(numb1, numb2){
    if(numb1 = numb2){
        console.log("Numbers are equal")
    }
    else {
        console.log("Numbers are not equal")
    }
}


//Zadaca 4
let age =22

if(age>=21){
    console.log("You can buy alchocol and vote")
}else if (age<=18){
    console.log("You can vote")
}else {
    console.log("You can't buy alchocol or vote")
}

let temperature = 25

if (temperature > 30) {
    console.log("It's hot outside")
} else if (temperature > 20) {
    console.log("It's warm outside")
} else if (temperature <= 15) {
    console.log("It's cold outside");
} else {
    console.log("Тhe weather is moderate");
}

function fizzBuzz(number) {
    if (number / 3 === 0 && number / 5 === 0) {
        console.log("FizzBuzz")
    } else if (number / 3 === 0) {
        console.log("Fizz")
    } else if (number / 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(number)
    }
}
fizzBuzz([])