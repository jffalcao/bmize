module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World form Hapi!';
        }
    }
];