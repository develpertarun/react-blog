const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/rblog', { 
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true
     })
    .then(() => console.log('Connected to the database.'))
    .catch((err) => console.error(err));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(5000);