const validator = require('validator');
const yargs = require('yargs');
const {hideBin} = require('yargs/helpers');
const chalk = require('chalk');
const notes = require('./note.js');


yargs(hideBin(process.argv))
    .version('1.1.0')
    //add command
    .command({
        command: 'add',
        describe: 'Add a new note',
        builder:  {
           title:{
               describe: 'Title of the note',
               demandOption: true,
               type: 'string',
           },
            body:{
              describe: 'Description of the note',
              demandOption: true,
              type: 'string',
            }
        },
        handler: function (argv) {
            notes.addNote(argv.title, argv.body);
        }
    })
    //removing command
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder:  {
            title: {
                describe: 'Title of the note',
                demandOption: true,
                type: 'string',
            }
        },
        handler: function (argv) {
            notes.removeNote(argv.title);
        }
    })
    //list command
    .command({
        command: 'list',
        describe: 'List a note',
        handler: function () {
            console.log(chalk.blue('List a note...'));
        }
    })
    //read command
    .command({
        command: 'read',
        describe: 'Read a note',
        handler: function () {
            console.log(chalk.blue('Read a note...'));
        }
    })
    .parse();
