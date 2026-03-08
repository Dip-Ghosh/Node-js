//callback
const doWorkCallback = (callback) =>{
    setTimeout(()=>{
        // callback('This is my error', undefined);
        callback(undefined, 'This is my result');
    }, 2000)
}


doWorkCallback((error, result) => {
   if (error) {
       return console.log(error);
   }
    console.log(result);
})

//promise

const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([2, 4, 5])
        reject('This is my error');
    }, 2000)
});

doWorkPromise.then((result)=> {
    console.log('success', result);
}).catch((error)=> {
    console.log('error', error);
});