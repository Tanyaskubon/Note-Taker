const util = require('util');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
class Store {
    read () {
        return readFileAsync('db/db.json', 'utf-8');
    }
    write (note) {
        return writeFileAsync('db/db.json', JSON.stringify(note))
    }
    getNotes(id, note) {
    const result = note.filter((note) => note.id === id)[0];
        return result;
        }
    
    addNotes(body,note) {
    const note = body;
   note.push(note);
   fs.writeFileSync(
       path.join(__dirname, "../db/note.json"),
       JSON.stringify({ note }, null, 2)
   );
    const newNote = { title, text, id: uuidv4() };
   };
};
    

module.exports =  Store