const fs = require('fs');

const book = {
    title: 'Book',
    author : "Dip Ghosh"
}

const bookJson = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJson);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

console.log(data.title);


const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);

data.name = "Dip";
user.age = "13"; 

fs.writeFileSync('1-json.json', JSON.stringify(user));

