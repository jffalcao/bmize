'use strict';

const Hapi = require('hapi');

const server = Hapi.server({
    port: 3000,

    // VS Code add line comment ctrl+k ctrl+c
    // VS code remove line comment ctrl+k ctrl+u

    // Running in a container
    host: '0.0.0.0'

    // Running locally
    // host: 'localhost'
});

const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);    
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

