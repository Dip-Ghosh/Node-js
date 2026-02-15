const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=3914ebf557762e19043de057a45be473&query=New York';

request({ url: url} , (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.current);
})


