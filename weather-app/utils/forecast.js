const request = require("request");

const forecast = (address, units, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3914ebf557762e19043de057a45be473&query='+ address +'&units=' + units;

    request({ url: url, json:true } , (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!.', undefined);
        }
        else if (response.body.error) {
            callback('Unable to find location!', undefined);
        }
        else {
           callback(undefined, {
               name: response.body.location.name,
               country: response.body.location.country,
               temperature: response.body.current.temperature,
               feelslike: response.body.current.feelslike,
           });
        }
    })
}


module.exports = forecast