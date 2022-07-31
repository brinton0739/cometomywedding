const { Guest, Wedding, Registry, Event } = require('../models/index');

async function getGuest(wed, user) {
    const guestData = await Guest.findOne({
        where: {
            wedding_id: wed,
            user_id: user
        }
    });
    return guestData.get({ plain: true });
};

async function getWedding(wed) {
    const weddingData = await Wedding.findByPk(wed);
    return weddingData.get({ plain: true });
};

async function getRegistry(wed) {
    const registryData = await Registry.findOne({
        where: {
            wedding_id: wed
        }
    });
    const registry = registryData.get({ plain: true });
    registry.description = registry.description.split(',');
    return registry;
};

async function getEvents(wed) {
    const eventData = await Event.findAll({
        where: {
            wedding_id: wed
        }
    });
    return eventData.map(data => {
        return data.get({ plain: true });
    });
}

const getDetails = async (wed, user) => {
    const guest = getGuest(wed, user);
    const wedding = getWedding(wed);
    const registry = getRegistry(wed);
    const events = getEvents(wed);
    return { guest, wedding, registry, events };
}

module.exports = getDetails;
