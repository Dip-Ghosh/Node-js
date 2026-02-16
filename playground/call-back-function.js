setTimeout(() => {
    console.log('call back function')
}, 2000)

const name = ['Dip', 'Risha'];
const shortName = name.filter((name) => {
    return name.length <= 3
});

const geoCode = (address, callback) => {
   setTimeout(() => {
       const data = {
           latitude: 0,
           longitude: 0,
       }

       callback(data)
   }, 2000)
}

geoCode('Dhaka', (data) => {
    console.log(data)
});


const add = (number1, number2, callback) => {
    setTimeout(() => {
       callback(number1 + number2)
    }, 3000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
