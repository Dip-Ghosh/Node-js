const fileSystem = require('fs');

fileSystem.writeFileSync('notes.txt', 'This file is written to a note without appending. ');
fileSystem.appendFileSync('notes.txt', '\nThis file is written to a note with  appending');