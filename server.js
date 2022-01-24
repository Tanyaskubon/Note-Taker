const PORT = process.env.PORT || 3001;
const fs = require('fs');
const express = require('express');

const app = express();

const allNotes  = require('./db/db.json');
const req = require('express/lib/request');





app.get('/api/notes', (req, res) => {
    res.json(allNotes)
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });