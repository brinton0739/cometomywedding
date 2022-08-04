const { Event } = require('../models/index');

async function getEvents(wed) {
    const eventsData = await Event.findAll({
        where: {
            wedding_id: wed
        }
    });
    return eventsData.map(event => {
        return event.get({ plain: true });
    });
}

module.exports = getEvents;