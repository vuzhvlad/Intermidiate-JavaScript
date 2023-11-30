'use strict';

localStorage.setItem('number', 5); // setting data into localStorage (key, value)

let num = localStorage.getItem('number'); // for getting item by key

console.log(num);

// localStorage.remove('number'); // for removing item by key

// localStorage.clear(); // clearing all local storage

const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if(localStorage.getItem('isChecked')) { // if it is possible to get this item from local storage then it exists
    checkbox.checked = true; // then we change value of checkbox to checked
}

if(localStorage.getItem('bg') === 'changed'){ // and if it has this item 
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => { // adding event listener for changing ckeck box
    localStorage.setItem('isChecked', true); // setting new item in local storage
});

change.addEventListener('click', () => { // listener for clicking on button
    if(localStorage.getItem('bg') === 'changed'){ // if this item in local storage already exist and we click on it
        localStorage.removeItem('bg'); // we remove it from there
        form.style.backgroundColor = '#fff'; // and change color to white
    } else { // if it is not in there
        localStorage.setItem('bg', 'changed'); // we set an item for knowing that it changed
        form.style.backgroundColor = 'red'; // and set color to red
    }
});

// the way how save data about user
const persone = {
    name: 'Alex',
    age: 25
};

const serializedPersone = JSON.stringify(persone); // we need to put data into JSOn to save it in localStorage
localStorage.setItem('alex', serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));