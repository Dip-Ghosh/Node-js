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
        builder: {
            title: {
                describe: 'Title of the note',
                demandOption: true,
                type: 'string',
            },
            body: {
                describe: 'Description of the note',
                demandOption: true,
                type: 'string',
            }
        },
        handler: (argv) => notes.addNote(argv.title, argv.body)
    })
    //removing command
    .command({
        command: 'remove',
        describe: 'Remove a note',
        builder: {
            title: {
                describe: 'Title of the note',
                demandOption: true,
                type: 'string',
            }
        },
        handler: (argv) => notes.removeNote(argv.title)

    })
    //list command
    .command({
        command: 'list',
        describe: 'List a note',
        handler: () => notes.listNotes()
    })
    //read command
    .command({
        command: 'read',
        describe: 'Read a note',
        builder: {
            title: {
                describe: 'Title of the note',
                demandOption: true,
                type: 'string',
            }
        },
        handler: (argv) => notes.readNote(argv.title)
    })
    .parse();
