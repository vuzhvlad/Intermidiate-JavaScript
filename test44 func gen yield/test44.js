'use strict';

function* generator() { // every time we call it, it will give "S" and "C"
    yield 'S';
    yield 'C';
    yield 'I';
    yield 'T';
};

const str = generator();


console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());
console.log(str.next());


function* count(n) {
    for(let i = 0; i <= n; i++) {
        yield i;
    }
}

for(let k of count(7)) {
    console.log(k);
}

// if you want to use it a max times you should use for of


