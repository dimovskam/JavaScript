let kniga = {
    Naslov:"Zlostorstvo i kazna",
    Avtor:"Fjodor Dostoevski",
    Godina:"1866",
    Ocenka:[1, 2, 3, 4, 5,]
}

console.log(kniga);

let avtomobil = {
    Marka:"Skoda",
    Serija:"Enyaq iV",
    Godina:"2020",
    Boja:"Zelena",
    Specifikacii:{
        oznaka:"1.5 TSI",
        sila:"110 kW / 148 КС",
        potrosuvacka:"5,1 l / 100 km",
        maksimalna_brzina:"213 km/h	",
    }
}

console.log(avtomobil)

let student = {
    Ime:"Antonio",
    Prezime: "Markovski",
    Godina_na_studii:"Prva godina",
    Fakultet: "Fakultet za elektrotehnika i informaciski tehnologii",
    Predmeti: [
        {predmet:"Osnovi na elektrotehnika", ocenka:"8"},
        {predmet:"Programiranje i algoritmi", ocenka:"10"},
        {predmet:"Matematika 1", ocenka:"9"},
    ]
}
console.log(student)

//Zadaca 2
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let start = 3;
let end = 10;
let sum = 0;

for (let i = start; i <= end; i++) {
    if (i % 2 === 0) { 
        sum += i;  
    }
}
console.log("Zbir na parni broevi:", sum)

let person = {
    name: "Marko",
    age: 24,
    city: "Ohrid"
};

for (let property in person) {
    console.log(`${property}: ${person[property]}`);
}

let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color.length, color);
}

//Zadaca 3

let count = 5;

while (count >= 1) {
    console.log(count);
    count--;  
}

let number = 10;

do {
    console.log(number);
    number--;
} while (number >= 1 && number !== 5);

//Zadaca 4

let students = [
    {
        name: "Maja",
        surname: "Jakimovska",
        age: 23,
        address: {
            city: "Skopje",
            street: {
                name: "Orce Nikolov",
                number: 15
            },
            zipCode: "1000"
        }
    },
    {
        name: "Luka",
        surname: "Micevski",
        age: 21, address: {
            city: "Skopje",
            street: {
                name: "Franjo Kluz",
                number: 13
            },
            zipCode: "1000"
        }
    }
]

console.log(students[0].address.city)
console.log(students[1]['address']['street']['name']);

//Zadaca 5

for (let i = 1; i <= 100; i += 4) {
    console.log(i);
}

for (let i = 2; i <= 50; i += 2) {
    console.log(i);
}

//Zadaca 6

let cities = ["Skopje", "Atina", "Belgrad", "Oslo", "Berlin", "Budimpeshta", "Barcelona", "Rim",];

for (let index in cities) {
    console.log(cities[index]);
}

let Cities = ["Skopje", "Atina", "Belgrad", "Oslo", "Berlin", "Budimpeshta", "Barcelona", "Rim",];
for (let city of cities) {
    console.log(city);
}

