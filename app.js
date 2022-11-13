'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat/', (req, res) => {
    res.send('From this endpoint you can get cats.')
});

app.get('/cat/:id', function (req, res) {
    res.send(`From this endpoint you can get cats.${req.params.id}`)
});

app.post('/cat', (req, res) => {
    res.send('From this endpoint you can get Hoes.')
});

app.put('/cat', (req, res) => {
    res.send('From this endpoint you can get Money.')
});

app.delete('/cat', (req, res) => {
    res.send('From this endpoint you can get Drugs.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
