const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const userRoutes = require('./routes/user');
const serviceRoutes = require('./routes/service');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//url pour servir les images
app.use('/images', express.static(path.join(__dirname,'images')));

app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);
module.exports = app;
