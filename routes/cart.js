module.exports = [
    { method: 'GET', path: '/cart', handler: function () {return 'GET /cart'} },
    { method: 'GET', path: '/cart/{id}', handler: function () {return 'GET /cart/{id}'} }
];