const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=3914ebf557762e19043de057a45be473&query=Bangladesh&units=f';

request({ url: url, json:true } , (error, response) => {
    console.log(response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature + ' degress out. There is a '
        + response.body.current.feelslike + '% chance of rain' );
})


