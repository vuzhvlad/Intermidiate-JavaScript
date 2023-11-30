'use strict';

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) { // error is a mistake that we get "Reference Error" example
    console.log(error); // just error
    console.log(error.message); // what caused this error
    console.log(error.name); // just a name of mistake
    console.log(error.stack);  // full message
} finally {
    console.log()
}
//for catching mistakes / errors
//and after that our script countinues working no matter we have got an mistake

console.log('1r421fage'); // this will work


// if we are working wtih multiple pages we have to use try/catch so we can avoid errors from another page


