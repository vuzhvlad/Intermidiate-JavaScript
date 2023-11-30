'use strict';

const person = {
    name: 'Vlad',
    age: 25,

    get userAge() { // for getting
        return this.age;
    },

    set userAge(num) { // for setting
        this.age = num;
    }
};

person.userAge = 30; // setter
console.log(person.userAge); // the way how to use getter (accesor)