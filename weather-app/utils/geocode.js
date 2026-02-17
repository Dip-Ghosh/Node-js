const request = require("request");

const geoCode = (address, callback) => {
    const url = 'https://nominatim.openstreetmap.org/search?q=' + address + '&format=json';

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to openstreetmap service!.', undefined);
        } else if (body.length === 0) {
            callback('Unable to connect to openstreetmap service!.', undefined);
        } else {
            callback(undefined, {
                latitude: body.latitude ?? 0,
                longitude: body.longitude ?? 0,
                location: body.location ?? 'Thakurgaon',
            });
        }
    });
}

module.exports =geoCode
