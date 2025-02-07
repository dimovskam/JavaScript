//Zadaca 1
let books = [
    { title: "Book 1", author: "Author A", year: 2000 },
    { title: "Book 2", author: "Author B", year: 2010 },
    { title: "Book 3", author: "Author C", year: 2020 },
  ]
  
  books.forEach(book => {
    console.log("Title: ${book.title}, Author: ${book.author}");
  })
  

  let bookAfter2000 = books.find(book => book.year > 2000);
  
  console.log("First book after 2000:", bookAfter2000)

  //Zadaca 2

  let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    hobbies: ["Reading", "Traveling", "Cooking"],
  }
  
  let additionalInfo = {
    email: "john.doe@gmail.com",
    phone: "+1 509 6871 547",
    education: {
      degree: "Bachelor's",
      major: "Computer Science",
    }
  }
  let mergedPerson = { ...person, ...additionalInfo };

  console.log(mergedPerson)

let user = {
  id: 123,
  username: "jsmith",
  fullName: { firstName: "John", lastName: "Smith" },
  contact: { email: "john@example.com", phone: "555-555-5555" },
  addresses: [
    {
      type: "home",
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
    {
      type: "work",
      street: "456 Market Street",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
    },
  ],
}

let { username } = user;
let { firstName, lastName } = user.fullName;
let { email } = user.contact;
let [homeAddress, workAddress] = user.addresses;
let { street: homeStreet, city: homeCity, state: homeState, zip: homeZip } = homeAddress;
let { street: workStreet, city: workCity, state: workState, zip: workZip } = workAddress;

console.log("Username: ${username}")
console.log("Full Name: ${firstName} ${lastName}")
console.log("Email: ${email}")
console.log("Home Address: ${homeStreet}, ${homeCity}, ${homeState} ${homeZip}")
console.log("Work Address: ${workStreet}, ${workCity}, ${workState} ${workZip}")

//Zadaca 3
let countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  
  countries.forEach(country => {
    if (country.toLowerCase().includes("land")) {
      console.log(country.toUpperCase())
    }
  })

  countries.forEach(country => {
    if (country.endsWith("ia") && country.length > 7) {
      console.log(country);
    }
  })

  //Zadaca 4

  let zooAnimals = [
    {
      id: "0938aa23-f153-4937-9f88-4858b24d6bce",
      name: "lions",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Zena",
          sex: "female",
          age: 12,
        },
        {
          name: "Maxwell",
          sex: "male",
          age: 15,
        },
        {
          name: "Faustino",
          sex: "male",
          age: 7,
        },
        {
          name: "Dee",
          sex: "female",
          age: 14,
        },
      ],
    },
    {
      id: "e8481c1d-42ea-4610-8e11-1752cfc05a46",
      name: "tigers",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Shu",
          sex: "female",
          age: 19,
        },
        {
          name: "Esther",
          sex: "female",
          age: 17,
        },
      ],
    },
    {
      id: "baa6e93a-f295-44e7-8f70-2bcdc6f6948d",
      name: "bears",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Hiram",
          sex: "male",
          age: 4,
        },
        {
          name: "Edwardo",
          sex: "male",
          age: 4,
        },
        {
          name: "Milan",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "ef3778eb-2844-4c7c-b66c-f432073e1c6b",
      name: "penguins",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Joe",
          sex: "male",
          age: 10,
        },
        {
          name: "Tad",
          sex: "male",
          age: 12,
        },
        {
          name: "Keri",
          sex: "female",
          age: 2,
        },
        {
          name: "Nicholas",
          sex: "male",
          age: 2,
        },
      ],
    },
    {
      id: "533bebf3-6bbe-41d8-9cdf-46f7d13b62ae",
      name: "otters",
      popularity: 4,
      location: "SE",
      residents: [
        {
          name: "Neville",
          sex: "male",
          age: 9,
        },
        {
          name: "Lloyd",
          sex: "male",
          age: 8,
        },
        {
          name: "Mercedes",
          sex: "female",
          age: 9,
        },
        {
          name: "Margherita",
          sex: "female",
          age: 10,
        },
      ],
    },
    {
      id: "89be95b3-47e4-4c5b-b687-1fabf2afa274",
      name: "frogs",
      popularity: 2,
      location: "SW",
      residents: [
        {
          name: "Cathey",
          sex: "female",
          age: 3,
        },
        {
          name: "Annice",
          sex: "female",
          age: 2,
        },
      ],
    },
    {
      id: "78460a91-f4da-4dea-a469-86fd2b8ccc84",
      name: "snakes",
      popularity: 3,
      location: "SW",
      residents: [
        {
          name: "Paulette",
          sex: "female",
          age: 5,
        },
        {
          name: "Bill",
          sex: "male",
          age: 6,
        },
      ],
    },
    {
      id: "bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5",
      name: "elephants",
      popularity: 5,
      location: "NW",
      residents: [
        {
          name: "Ilana",
          sex: "female",
          age: 11,
        },
        {
          name: "Orval",
          sex: "male",
          age: 15,
        },
        {
          name: "Bea",
          sex: "female",
          age: 12,
        },
        {
          name: "Jefferson",
          sex: "male",
          age: 4,
        },
      ],
    },
    {
      id: "01422318-ca2d-46b8-b66c-3e9e188244ed",
      name: "giraffes",
      popularity: 4,
      location: "NE",
      residents: [
        {
          name: "Gracia",
          sex: "female",
          age: 11,
        },
        {
          name: "Antone",
          sex: "male",
          age: 9,
        },
        {
          name: "Vicky",
          sex: "female",
          age: 12,
        },
        {
          name: "Clay",
          sex: "male",
          age: 4,
        },
        {
          name: "Arron",
          sex: "male",
          age: 7,
        },
        {
          name: "Bernard",
          sex: "male",
          age: 6,
        },
      ],
    },
  ]

  zooAnimals.forEach(animal => {
    if (animal.popularity > 4) {
      console.log(animal.name);
    }
  })

  let elephants = zooAnimals.find(animal => animal.name === "elephants");
let oldestElephant = elephants.residents.reduce((oldest, resident) => {
  return (resident.age > oldest.age) ? resident : oldest;
})

console.log(oldestElephant.name)

let penguins = zooAnimals.find(animal => animal.name === "penguins");
penguins.residents.forEach(resident => {
  if (resident.age < 10 && resident.sex === "female") {
    console.log(resident.name);
  }
})

let largestNameGroup = zooAnimals.reduce((largest, animal) => {
    return (animal.name.length > largest.name.length) ? animal : largest;
  });
  
  let ageSum = largestNameGroup.residents.reduce((sum, resident) => sum + resident.age, 0);
  console.log(ageSum);

  let minResidentsGroup = zooAnimals.reduce((minGroup, animal) => {
    return (animal.residents.length < minGroup.residents.length) ? animal : minGroup;
  });
  
  let maxResidentsGroup = zooAnimals.reduce((maxGroup, animal) => {
    return (animal.residents.length > maxGroup.residents.length) ? animal : maxGroup;
  });

  let allResidents = [
    ...minResidentsGroup.residents.map(resident => resident.name),
    ...maxResidentsGroup.residents.map(resident => resident.name)
  ];
  
  console.log(allResidents)

//Zadaca 5
function checkGrade(grade) {
    return (grade >= 90) ? "A" :
           (grade >= 80) ? "B" :
           (grade >= 70) ? "C" :
           (grade >= 60) ? "D" :
           'F';
  }
  
  console.log(checkGrade(95)); 
  console.log(checkGrade(85)); 
  console.log(checkGrade(75));
  console.log(checkGrade(65)); 
  console.log(checkGrade(50)); 