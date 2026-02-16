const request = require("request");

const geoCode = (address, callback) => {
    const url = 'https://nominatim.openstreetmap.org/search?q=' + address + '&format=json';

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to openstreetmap service!.', undefined);
        } else if (response.body.length === 0) {
            callback('Unable to connect to openstreetmap service!.', undefined);
        } else {
            callback(undefined, {
                latitude: response.body.latitude ?? 0,
                longitude: response.body.longitude ?? 0,
                location: response.body.location ?? 'Thakurgaon',
            });
        }
    });
}

module.exports =geoCode
