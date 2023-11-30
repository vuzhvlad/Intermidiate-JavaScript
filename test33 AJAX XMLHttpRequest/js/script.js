'use strict';

const inputRub = document.querySelector('#rub');
const inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
    const request = new XMLHttpRequest(); //creating an object working with BackEnd

    //methods of XMLHttpRequest
    request.open('GET', 'js/current.json');   // .open(method, url, async, login, pass);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //properties
    
    //status - status of it (numbers)
    //statusText - status of it(text)
    //response - answer from backend(object from JSON)
    //readyState - state of our request

    
    // request.addEventListener('readystatechange', () => { // checks status of changing statuses
    //     if(request.readyState === 4 && request.status == 200) { // 4 state is DONE and 200 means that it was sent succesfully
    //         console.log(request.response); // we will show answer from server
    //         const data = JSON.parse(request.response); // we ve got object from JSON to JS
    //         inputUsd.value = (+inputRub.value * data.current.usd).toFixed(2); // .toFixed(num) - how many numbers after dot
    //     } else {
    //         inputUsd.value = 'Something went wrong';
    //     }
    // });

    request.addEventListener('load', () => { // if it is loaded
        if(request.status == 200) { // 4 state is DONE and 200 means that it was sent succesfully
            console.log(request.response); // we will show answer from server
            const data = JSON.parse(request.response); // we ve got object from JSON to JS
            inputUsd.value = (+inputRub.value * data.current.usd).toFixed(2); // .toFixed(num) - how many numbers after dot
        } else {
            inputUsd.value = 'Something went wrong';
        }
    });
    
    
});