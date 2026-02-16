const request = require('request');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

forecast('Bangladesh', 'f', (error, data) => {
    console.log(data.name + ',' + data.country + ' .It is currently ' + data.temperature + ' degress out. There is a ' + data.feelslike + '% chance of rain' );
});

geoCode('Dhaka', (error, data) => {
    console.log('error', error);
    console.log('Data', data);
});

