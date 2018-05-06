var  config = require('../shared/config/server-config')
const express = require('express');
const server = express();
const next = require('next');
const bodyParser = require('body-parser');
const compression = require('compression');
const port = parseInt(process.env.PORT, 10) || config.portClient;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler()
app.prepare()
    .then(() => {
        server.use(compression());
        server.use(bodyParser.json({ extend: true }));
        server.use(bodyParser.urlencoded({ extend: true }));
        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(port, (err) => {
            if (err) throw err;
            console.log(`> Ready on ${config.host}` + `:${port}`);
        });
    });


