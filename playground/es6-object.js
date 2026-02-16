// const name = 'John';
// const userAge = 27;
//
// const user = {
//     name: name,
//     age: userAge,
//     location: 'Dhaka'
// }
//
// console.log(user);
//
// //shorthand object
// const userSh = {
//     name,
//     age : userAge,
//     location: 'Dhaka'
// }
//
// console.log(userSh);
//
// //object destructuring to get the object value from object
//
const product = {
    lebel: 'Red notebook',
    price: 5,
    stock:201,
    salePrice: undefined,
    rating: 3.1
}
//
// // const lebel = product.lebel;
// // const stock = product.stock;
//
// const {lebel:Productlabel, stock, rating = 5} = product;
// console.log(Productlabel, stock, rating);
//


const transaction = (type, { lebel:label }) => {
console.log(label, type)
}

transaction('order', product);