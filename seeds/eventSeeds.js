const { Event } = require('../models/index');
const eventData = [
    {
        name: 'A wedding',
<<<<<<< HEAD
        venue: 'A place',
        address: 'Some address',
=======
        venue: 1,
>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b
        wedding_id: 1,
        date: 'Some date',
        time: 'Some time between one time and another',
        dress_code: 'Formal'
    },
    {
        name: 'Another wedding',
<<<<<<< HEAD
        venue: 'A venue',
        address: 'Another address',
        wedding_id: 1,
        date: 'Another date',
        time: 'Another period of time',
        dress_code: 'Informal'
    },
    {
        name: 'A wedding',
        venue: 'A place',
        address: 'Some address',
        wedding_id: 1,
        date: 'Some date',
        time: 'Some time between one time and another',
        dress_code: 'Formal'
    },
    {
        name: 'Another wedding',
        venue: 'A venue',
        address: 'Another address',
        wedding_id: 1,
        date: 'Another date',
=======
        venue: 2,
        wedding_id: 2,
>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b
        time: 'Another period of time',
        dress_code: 'Informal'
    }
];

const seedEvents = () =>Event.bulkCreate(eventData);

module.exports = seedEvents;