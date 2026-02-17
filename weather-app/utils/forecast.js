const request = require("request");

const forecast = (address, units, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3914ebf557762e19043de057a45be473&query='+ address +'&units=' + units;

    request({ url, json:true } , (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!.', undefined);
        }
        else if (body.error) {
            callback('Unable to find location!', undefined);
        }
        else {
           callback(undefined, {
               name: body.location.name,
               country: body.location.country,
               temperature: body.current.temperature,
               feelslike: body.current.feelslike,
           });
        }
    })
}


module.exports = forecast