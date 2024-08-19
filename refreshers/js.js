//node refreshers/js.js
"use strict";

//----------------- Variables -----------------
const firstName = 'Lukas';
let age = 24;
const hasHobbies = true;

age = 25;

//----------------- Functions -----------------
function summarizeUser(userName, userAge, userHasHobbies) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;
}

const summarizeUser2 = function(userName, userAge, userHasHobbies) {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;
}

const summarizeUser3 = (userName, userAge, userHasHobbies) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;
}

const summarizeUser4 = (userName, userAge, userHasHobbies) => 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;


console.log(summarizeUser(firstName, age, hasHobbies));

//----------------- Objects -----------------
const person = {
    name: 'Lukas',
    age: 24,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

console.log(person);
person.greet();

//----------------- Arrays -----------------
const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

//possible, although hobbies is a const
//just the reference is constant, not the content
hobbies.push('Programming');
console.log(hobbies);

//----------------- Spread & Rest Operator -----------------
const copiedArray = hobbies.slice();
const copiedArray2 = [...hobbies]; //spread operator
const copiedPerson = {...person}; //spread operator

//rest operator
const toArray = (...args) => {
    return args;
};

console.log(toArray(1, 2, 3, 4));

//----------------- Destructuring -----------------

const printName = (personData) => {
    console.log(personData.name);
}

const printNameDestructering = ({ name }) => {
    console.log(name);
};

const {name, age: userAge} = person; //object destructuring
const [hobby1, hobby2] = hobbies; //array destructuring

//----------------- Async Code & Promises -----------------

//callback function
//Callback Hell
setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

//Promises
setTimeout(() => {
    console.log('Timer is done!');
    fetchData2()
        .then(text => {
            console.log(text);
            return fetchData2();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);


const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};
