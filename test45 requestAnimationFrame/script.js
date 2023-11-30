const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

// function myAnimation() {
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }

function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation); // it will do this animation 300 times when we call it and when it is 300 it will stop
    }
}

btn.addEventListener('click', () => requestAnimationFrame(myAnimation)); // listener with callback function that calls our function

let id = requestAnimationFrame(myAnimation);
cancelAnimationFrame(id); // to cancel animation 