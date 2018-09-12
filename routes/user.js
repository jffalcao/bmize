module.exports = [
    { method: 'GET', path: '/users', handler: function () {return 'GET /users'} },
    { method: 'GET', path: '/users/{id}', handler: function () {return 'GET /users/{id}'} }
];