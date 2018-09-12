'use strict';

const Hapi = require('hapi');

const routes = {};
routes.index = require('./routes');

const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route(routes.index);

async function start() {
    try {
        await server.start();
    }

    catch (err) {
        console.log(err);
        process.exit(1);    
    }

    console.log('Server running at: ', server.info.uri);    
};

start();
