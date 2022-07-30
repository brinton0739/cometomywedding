const Event = require('../models/Event')
const eventData = [
    {
        name: 'A wedding',
        location_id: 1,
        wedding_id: 1,
        time: 'Some time between one time and another',
        dress_code: 'Formal'
    },
    {
        name: 'Another wedding',
        location_id: 2,
        wedding_id: 2,
        time: 'Another period of time',
        dress_code: 'Informal'
    }
]

const seedEvents = () =>Event.bulkCreate(eventData);

module.exports = seedEvents;