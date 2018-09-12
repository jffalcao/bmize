var Hapi = require('hapi');
var routes = require('./routes');

const server = Hapi.server({
    host: 'localhost',
    port: 8080
});

server.route(routes);

server.start(function () {
  console.log('Server running at:', server.info.uri);
});