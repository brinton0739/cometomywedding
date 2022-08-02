const { Event } = require('../models/index');
const eventData = [
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
        time: 'Another period of time',
        dress_code: 'Informal'
    }
];

const seedEvents = () =>Event.bulkCreate(eventData);

module.exports = seedEvents;