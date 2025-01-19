//Zadaca 1

function printFunc(seconds) {
    if (typeof seconds !== 'number') {
      console.log("Please enter number");
      return;
    }
  
    if (seconds < 0 || seconds > 9) {
      console.log("Please enter one digit number");
      return;
    }
    setTimeout(() => {
        console.log("Coding is not that hard!");
      }, seconds * 1000);
    }
    
  printFunc(3);
  printFunc("number"); 
  printFunc(13);

  //Zadaca 2

  function promiseFunction1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Function 1 resolved!");
      }, 4000);
    });
  }

  function promiseFunction2() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject("Function 2 rejected!");
      }, 1000);
    });
  }

  function promiseFunction3() {
    return new Promise((resolve, reject) => {
      const numb = 2;
      setTimeout(() => {
        resolve("Function 3 resolved with value: ${numb}");
      }, 2000);
    });
  }

  function promiseFunction4() {
    return new Promise((resolve, reject) => {
      const number = 5;
      setTimeout(() => {
        reject("Function 4 rejected with value: ${number}");
      }, 3000);
    });
  }

  function promiseFunction5(success) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve("Function 5 resolved successfully!");
        } else {
          reject("Function 5 failed!");
        }
      }, 2000);
    });
  }

  //a
  promiseFunction1()
  .then(result => console.log(result))
  .catch(error => console.log(error))

  promiseFunction2()
  .then(result => console.log(result))
  .catch(error => console.log(error))

  promiseFunction3()
  .then(result => console.log(result))
  .catch(error => console.log(error))

  promiseFunction4()
  .then(result => console.log(result))
  .catch(error => console.log(error))

  promiseFunction5()
  .then(result => console.log(result))
  .catch(error => console.log(error))

//b
async function callFunctionsAsync() {
  try {
    let result1 = await promiseFunction1();
    console.log(result1);
  } catch (error) {
    console.log(error);
  }

  try {
    let result2 = await promiseFunction2();
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
  try {
    let result3 = await promiseFunction3();
    console.log(result3);
  } catch (error) {
    console.log(error);
  }

  try {
    let result4 = await promiseFunction4();
    console.log(result4);
  } catch (error) {
    console.log(error);
  }
  try {
    let result5 = await promiseFunction5();
    console.log(result5);
  } catch (error) {
    console.log(error);
  }
}

callFunctionsAsync();

//Zadaca 3

function checkNumber(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      resolve("The number is even");
    } else {
      reject("The number is odd");
    }
  });
}

function handleSuccess(success) {
  console.log(success);
}

function handleError(error) {
  console.log(error);
}

checkNumber(134)
  .then(handleSuccess)
  .catch(handleError);

checkNumber(136)
  .then(handleSuccess)
  .catch(handleError);

checkNumber(141)
  .then(handleSuccess)
  .catch(handleError);

checkNumber(145)
  .then(handleSuccess)
  .catch(handleError);

  //Zadaca 4

  function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "John Doe",
          age: 30,
          email: "john@example.com",
        })
      }, 2000)
    })
  }

  async function displayUserDetails() {
    try {
    
      const userDetails = await fetchData();
      

      console.log("Name: ${userDetails.name}");
      console.log("Age: ${userDetails.age}");
      console.log("Email: ${userDetails.email}");
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  displayUserDetails()

  //Zadaca 5

  function countdown(seconds) {
    const intervalId = setInterval(() => {
      console.log(seconds);
      seconds--
  
      
      if (seconds < 0) {
        clearInterval(intervalId);
        console.log("Countdown complete!");
      }
    }, 1000); 
  }

  countdown(15);
