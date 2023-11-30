'use strict';

console.log('Asking for data...'); // sync code

const req = new Promise((resolve, reject) => { // creating a promise and we dont know how it will end positive or negative,  if everyting is good we call - resolve, if it is not we call - reject
    setTimeout(() => {
        console.log('Preparing...') // async code
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product); // it says everything is good, and we put data inside of resolve - "product"
    }, 2000);
});

req.then((product) => { // .then for resolve, "then we will do that..." we also put data inside of it - "product"
    return new Promise((resolve, reject) => { // returning this promise
        setTimeout(() => {
            product.status = 'order';
            resolve(product); // if code is resolved we
        }, 2000);
    });
}).then(data => { // and we can use .then like that if code is resolved
    data.modify = true;
    return data;
}).then(data => { // and we can also do that one by one no matter this code is sync or async
    console.log(data);
}).catch(() => { // if code is rejected
    console.error('Something wrong...')
}).finally(() => {// it will happen no matter what so it is useful for cleaning something(form)
    console.log('Finally');
});

//So we are doing it one by one

const test = time => {
    return new Promise(resolve => { // returns a new promise
        setTimeout(() => resolve(), time); 
    });
}

test(5000).then(() => {
    console.log('1000 ms');
});
test(8000).then(() => {
    console.log('2000 ms');
});

Promise.all([test(3000), test(2000)]).then(() => {
    console.log('All');
}); // it calls two promises and it will happen only after both of them are done

Promise.race([test(1000), test(4000)]).then(() => {
    console.log('Race');
}); // it happens when the any first pormise is done