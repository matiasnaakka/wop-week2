'use strict';
const express = require('express');
const cors = require('cors');
const catRoute = require('./routes/catRoute');
const userRoute = require('./routes/userRoute');
const {httpError} = require('./utils/errors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use(express.static('uploads'));


app.get('/matt/:id', (req, res) => {

})

app.use('/cat', catRoute);
app.use('/user', userRoute);

app.use((req, res, next) => {
    const err = httpError('Not found', 404);
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).
    json({message: err.message || 'Internal server error'});
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
