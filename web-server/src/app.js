
const path = require("path");
const express = require('express');
const hbs = require('hbs');

const app = express();

//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//set up handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Dip'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Dip'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is the help page',
        title: 'Help',
        name: 'Dip'
    });
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Weather Weather',
        location: 'Dhaka'
    });
})


app.get('*any', (req, res) => {
    res.render('404', {
        error_title: '404: Page Not Found',
        error_description: 'Oops! The page you are looking for doesn\'t exist.',
    })
})

app.listen(3000, () => {
    console.log('Express server started on port 3000');
});