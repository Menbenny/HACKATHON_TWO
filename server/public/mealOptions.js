// const userName = localStorage.getItem('userName');

// document.getElementsByClassName('userName').innerHTML = userName

// ! Retrieve the user info from database
// ! Inject the user diet type into the API URL - tags = ${diet-type}

const username = localStorage.getItem('name');
const email = localStorage.getItem('email')
const password = localStorage.getItem('passwod')

const age = localStorage.getItem('age')
const weight = localStorage.getItem('weight')
const height = localStorage.getItem('height')
// console.log(username, email, password, age, weight, height);
const dietType = localStorage.getItem('dietType')
console.log(`Diet type is: ${dietType}`);

