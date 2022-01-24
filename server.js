const fs = require('fs');
const path = require('path');
const express = require('express');
const notes  = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/api/notes', (req, res) => {
    res.json(notes)
});

app.post('/api/notes', (req, res) => {
    const createNotes = (req.body);
    fs.readFile("./public/assets/db.json", "utf-8", (err, data) => {
        notes = JSON.parse(data);
        createNote.id = parseInt(notes.length + 1);
        notes.push(createNote);
    
        console.log(notes);
    
        fs.writeFile("./public/assets/db.json", JSON.stringify(notes), (err) => {
          if (err) throw err;
          res.json(notes);
        });
      });
    });
    



app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });