
const validator = require('validator');
const chalk = require('chalk');

const command = process.argv[2];

if (command === 'add') {
    console.log('Adding new note!');
} else if (command === 'remove') {
    console.log('Remove new note!');
}