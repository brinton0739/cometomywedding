const { User, Guest, Wedding, Registry, Event, Signature} = require('../models/index');

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
    const eventsData = await Event.findAll({
        where: {
            wedding_id: wed
        }
    });
    return eventsData.map(event => {
        return event.get({ plain: true });
    });
}

async function getSignatures(wed) {
    const signatureData = await Signature.findAll({
        where: {
            wedding_id: wed
        },
        include: [
            {
              model: Guest,
              where: {
                wedding_id: wed
              },
              include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name']
                }
              ]
            },
          ],
    });
    return signatureData.map(signature => {
        return signature.get({ plain: true });
    });
}

const getDetails = async (wed, user) => {
    const guest = await getGuest(wed, user);
    const wedding = await getWedding(wed);
    const registry = await getRegistry(wed);
    const events = await getEvents(wed);
    const signatures = await getSignatures(wed);
    return { guest, wedding, registry, events, signatures };
}

module.exports = getDetails;
