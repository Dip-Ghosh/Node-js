const fs = require('fs')
const chalk = require("chalk");

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find(note => note.title === title);

    if (note) {
        console.log(chalk.green.inverse(`Note found. ${note.title}`));
    } else {
        console.log(chalk.red.inverse(`No note Found`));
    }
};

const listNotes = () => {
    const notes = loadNotes();

    notes.forEach((note) => {
        console.log(chalk.blue.inverse(`${note.title}`));
    })
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find(note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title !== title);

    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note Remove!...'));
    } else {
        console.log(chalk.red.inverse('No note found!...'));
    }
}

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}