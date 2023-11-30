'use strict';

// .filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) { // creating new array with filtered information
    return name.length < 5;
});

console.log(shortNames);

// map

let answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => { // creating new array  with changing
    return item.toLowerCase();
});

console.log(result);

// every/some

const some = [4, 'qwq', 'sgsregs'];

console.log(some.some(item => typeof(item) === 'number')); // some of elements 

console.log(some.every(item => typeof(item) === 'number')); // all of the elements

//reduce

const arr = [4, 5, 1, 3, 2, 6];
                    /* 0    4
                       4    5
                       9    1
                       10   3 */

const res = arr.reduce((sum, current) => sum + current); // sum is summary of all numbers and current is current number in array

console.log(res);

//for string

const str= ['apple', 'pear', 'plum'];
                   
const string = str.reduce((sum, current) => `${sum}, ${current}`); // 

console.log(string);



const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};  

const newArr = Object.entries(obj).filter(item => item[1] ==='persone').map(item => item[0]); // chaining(doing it in one line)

// Object.entries(obj); - makes matrix arrays in array 
// .filter(item => item[1] ==='persone'); - gets arrays that has 'persone' in second place
// .map(item => item[0]); - makes a new array with only first items of that arrays

console.log(newArr); 


//excercise
const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    let filteredArr = arr.filter((item) => {
        return item.rating >= 8;
    }); 
    return filteredArr;
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    let newArr = arr.map(item => item.name);

    let newStr = newArr.reduce((sum, current) => `${sum}, ${current}`);

    return newStr;
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    arr.forEach((item, i) => {
        item.id = i;
    });

    return arr;
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    let answer = arr.every((item) => {
        return item.id || item.id === 0;
    });

    return answer
}
console.log(checkFilms(tranformedArray));

 //excercise

 const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    const filteredData = data.reduce((sum, current) => {
        if(current.amount > 0) {
            return sum + current.amount;
        } else {
            return sum;
        }
    }, 0);
    
    return filteredData;
};


const getTotalIncomeAmount = (data) => {
    if(data.some(item => item.amount < 0)) {
        const newArr = data.reduce((sum, curr) => {
           return sum + curr.amount; 
        }, 0);
        return newArr;
    } else {
        return getPositiveIncomeAmount(data);
    }
};
console.log(getPositiveIncomeAmount(funds));


