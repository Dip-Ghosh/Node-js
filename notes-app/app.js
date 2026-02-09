// const fileSystem = require('fs');
//
// fileSystem.writeFileSync('notes.txt', 'This file is written to a note without appending. ');
// fileSystem.appendFileSync('notes.txt', '\nThis file is written to a note with  appending');

// const add = require('./utils.js');
const note = require('./note.js');
// const sum = add(4, -2);
// console.log(sum);

const writtenNote = note('This is the note.')
console.log(writtenNote);