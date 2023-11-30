'use strict';

function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Name of user: ${this.name}, age: ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Something wrong')
        }
    }; 
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.userAge);
//we cant get or change userAge
ivan.userAge = 30;
ivan.name = 'Alex';

console.log(ivan.getAge());
ivan.setAge(35);
ivan.setAge(300);

ivan.say();
 //Closure for constructor



 class UserClass {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    
    say() {
        console.log(`Name of user: ${this.name}, age: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if(typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Something wrong')
        }
    }
 }

 const vlad = new UserClass('Vlad', 18);

 console.log(vlad.age);
 vlad.age = 25;
 console.log(vlad.age);
 vlad.say();


 class Surname {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = 'Vuzh';

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        this.#surname = surname;
    }
 }

 const trafim = new Surname('Trafim', 18);

 console.log(trafim.surname);
 trafim.surname = 'Brokh';
 console.log(trafim.surname);