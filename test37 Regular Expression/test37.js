'use strict';

 // new RegExp('pattern', 'flags'); // syntax for regular expression

// /pattern/flags // a shorter synttax for patter


const ans = prompt('Fill your name'); 

const reg = /\d/ig; // regular exxpression 

//FLAGS
// i - doesnt depend on case of letter
// g - can find few things
// m

console.log(ans.search(reg)); // we get index of that letter and if it doesnt find it we get -1
// .search find only first letter that you want to find

console.log(ans.match(reg)); // we get an array with strings inside that have something we wanted to find 



const pass = prompt('Pasword');

console.log(pass.replace(/\./g, "*")); // if we put "." inside of regular expression inside it will be used on everything and method replace replaces it iwth "*"

// /\./g, "*"  "\" for ecranisation so it will replace "." as well

console.log('12-34-56'.replace(/-/g, ':')); // replacing "-" with ':'

console.log(reg.test(ans)); // method of regular expression .test() - tests if we have something like that inside we want and gives true or false

//CLASSES
// \d - for finding all digits
// \w - for finding all words letters
// \s - for finding all spaces

console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // we try to find something that starts with letter than with number and again

// UNCLASSES - it find something that is not a number or letter or spaces
// \D
// \W
// \S

console.log(str.match(/\D/ig)); // to find everything except of numbers








