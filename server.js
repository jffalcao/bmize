<<<<<<< HEAD
// Code from solution exercise 00_07.js

var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({ port: 8080 });

server.route([
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply('Hello world from hapi');
    }
  }
]);

server.start(function(err) {
  console.log('Hapi is listening to http://localhost:8080');
});
=======
'use strict';

const Hapi = require('hapi');

const routes = {};
routes.index = require('./routes/index');

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
>>>>>>> 48aa3b01c6ef62b271d21c793006246a490a391f
