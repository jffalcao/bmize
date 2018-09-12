'use strict';

var weightList = [
    {
        "id": "1",
        "date": "2018-08-01",
        "weight_kg": "86"
    },
    {
        "id": "2",
        "date": "2018-08-01",
        "weight_kg": "50"
    },
    {
        "id": "1",
        "date": "2018-08-09",
        "weight_kg": "87.5"
    },    {
        "id": "1",
        "date": "2018-08-11",
        "weight_kg": "88"
    },
    {
        "id": "2",
        "date": "2018-08-03",
        "weight_kg": "51"
    },
    {
        "id": "2",
        "date": "2018-08-05",
        "weight_kg": "49.5"
    }
];

module.exports = [
    {
        method: 'GET',
        path: '/wh/',
        handler: (request, reply) => {
            return 'Member root page';
        }
    }
];