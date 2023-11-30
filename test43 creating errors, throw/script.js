'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'ffff',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]


try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if(!blockObj.id) {
            throw new SyntaxError(`in data by number ${i + 1}`);
        }
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(error) {
    if(error.name === 'SyntaxError') {
        console.log(error.message);
    } else throw error;
    
    
}



// const err = new Error('123123');
// console.log(err.message);
// console.log(err.stack);
// console.log(err.name);

// const err1 = new SyntaxError('123123');
// console.log(err.message);
// console.log(err.stack);
// console.log(err.name);