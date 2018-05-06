const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const mongoose = require('mongoose');
const config = require('./config');
const apiConfig = require('../shared/config/server-config');
const ProductRoute = require('./route/ProductRoute');

mongoose.connect(config.url, (err, db) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connect DB success !', config.url);
    }
});

server.use(compression());
server.use(bodyParser.json({ extend: true }));
server.use(bodyParser.urlencoded({ extend: true }));

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");

    next();
});

server.use('/api',ProductRoute);

server.listen(apiConfig.portServerNode, (err) => {
    if(err) {
        return console.log(err)
    }
    console.log('Server listening on', apiConfig.host +':' + apiConfig.portServerNode)
})