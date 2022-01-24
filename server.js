const fs = require('fs');
const path = require('path');
const express = require('express');
const allNotes  = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());











app.get('/api/notes', (req, res) => {
    res.json(allNotes)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });