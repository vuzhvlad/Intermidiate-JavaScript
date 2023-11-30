'use strict';

const person = {
    name: 'Alex',
    tel: '444444',
    parents: {
        mom: 'Olesya',
        dad: 'Vitaliy'
    }
};

console.log(JSON.stringify(person)); // making json file for connecting with Backend server it makes it like that "name":"Alex",..

console.log(JSON.parse(JSON.stringify(person))); // getting json file from backend and formating it to js

//JSON is easier to read and it takes less memory 

const clone = JSON.parse(JSON.stringify(person)); // creating a clone with JSON file that doesnt depend on its original

clone.parents.mom = 'Olya';
console.log(person);
console.log(clone);