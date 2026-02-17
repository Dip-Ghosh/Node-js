const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>');
});

app.get('/help', (req, res) => {
    res.send([
        {
        name: 'Dip'
        },
        {
            age: 30
        }
        ]);
})

app.get('/about', (req, res) => {
    res.send('<h1>About Page! </h1>');
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Weather Weather',
        location: 'Dhaka'
    });
})

app.listen(3000, () => {
    console.log('Express server started on port 3000');
});