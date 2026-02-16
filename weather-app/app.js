const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');
const chalk = require('chalk');
const geoCode = require('./utils/geocode');
const forecast = require('./utils/forecast');

yargs(hideBin(process.argv))
    .version('1.1.0')
    .command({
        command: 'add',
        describe: 'Add a location',
        builder: {
            name: {
                describe: 'Name of the Location',
                demandOption: true,
                type: 'string',
            }
        },
        handler: (argv) => {
            geoCode(argv.name, (error, { geo.location:location}) => {
                if (error) {
                    return console.log(error);
                }

                forecast(geo.location, 'f', (error, data) => {
                    if (error) {
                        return console.log(error);
                    }

                    console.log(data.name + ',' + data.country + ' .It is currently ' + data.temperature + ' degress out. There is a ' + data.feelslike + '% chance of rain');
                });
            });
        }
    })
    .parse();

