'use strict';

var personList = [
    {
        "id": "1",
        "lname": "Falcao",
        "fname": "José Fernando",
        "height_cm": "172"
    },
    {   
        "id": "2",
        "lname": "Coulombe",
        "fname": "Chantale",
        "height_cm": "158"
    }    
];

module.exports = [
    {
        method: 'GET',
        path: '/member',
        handler: (request, h) => {
            return 'Members root page';
        }
    }
];