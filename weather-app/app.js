const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=3914ebf557762e19043de057a45be473&query=Bangladesh&units=f';

request({ url: url, json:true } , (error, response) => {
    if (error) {
        console.error('Unable to connect to weather service!.');
    }
    else if (response.body.error) {
        console.error('Unable to find location!');
    }
    else {
        console.log(response.body.current.weather_descriptions[0] + ' .It is currently ' + response.body.current.temperature + ' degress out. There is a '
            + response.body.current.feelslike + '% chance of rain' );
    }

})


const geoLocation = 'https://nominatim.openstreetmap.org/search?q=Thakurgaon&format=json';

request({url: geoLocation, json:true}, (error, response) => {
    if (error) {
        console.error('Unable to connect to openstreetmap service!.');
    } else if (response.body.length == 0) {
        console.error('Unable to connect to openstreetmap service!.');
    } else {
        const data = response.body;
        console.log(data);
    }
})