
const fs = require('fs')

const getNotes = function(notes) {
    return notes;
}

const addNote = function(title, body) {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(note => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes)
        console.log('New Note added!');
    } else {
        console.log('Note title taken!');
    }
}

const saveNotes = function(notes) {
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}

const loadNotes = function() {

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes : getNotes,
    addNote : addNote
}