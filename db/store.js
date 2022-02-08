const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
    read() {
        return readFileAsync('db/db.json', 'utf-8');
    }
    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }
    getNotes() {
        return this.read().then((notes) => {
            let newNote;
            try {
                newNote = [].concat(JSON.parse(notes))
            } catch (error) {
                newNote = []   
            }
            return newNote;
        })
    }

    addNotes(note) {
        const {title, text} = note;
       
        const newNote = { title, text, id: uuidv4() };
        return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((info) => this.write(info))
        .then(() => newNote)
    };
    deleteNotes (){
        return this.getNotes().then((notes)=> notes.filter((note)=> note.id !== id))
        .then((notesFiltered) => this.write(notesFiltered))
    }
};


module.exports = new Store()