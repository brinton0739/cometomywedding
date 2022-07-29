const Event = require('../models/Event')
const eventData = [
    {
        location_id: 1,
        wedding_id: 1,
        time: new Date(new Date() - Math.random()*(1e+12)),
        dress_code: 'Formal'
    },
    {
        location_id: 2,
        wedding_id: 2,
        time: new Date(new Date() - Math.random()*(1e+12)),
        dress_code: 'Informal'
    }
]

const seedEvents = () =>Event.bulkCreate(eventData);

module.exports = seedEvents;