require('../src/db/mongoose');
const User = require('../src/models/user');
const Task = require('../src/models/task');


const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (a < 0 || b < 0) {
               return reject('a and b must be non negative number');
            }

            resolve(a + b);
        }, 2000)
    })
}

const doWork = async () => {
    const sum =  await add(1, 99);
    const sum2 = await add(sum, 1);
    return await add(sum2, -3);
}

doWork().then((result)=> {
    console.log(result);
}).catch((err)=> {
    console.log(err);
})