const { Event } = require('../models/');

async function getEvents(wed) {
    const eventsData = await Event.findAll({
        where: {
            wedding_id: wed
        }
    });
    if(eventsData != null) return eventsData.map(event => {
        return event.get({ plain: true });
    });
    else return {
        error: 'No events found.'
    };
};

module.exports = getEvents;