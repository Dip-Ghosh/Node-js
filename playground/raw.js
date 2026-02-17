const http = require('http');
const url = 'http://api.weatherstack.com/current?access_key=3914ebf557762e19043de057a45be473&query='+ 'Thakurgaon' +'&units=f';

const request = http.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(error);
})

request.end()