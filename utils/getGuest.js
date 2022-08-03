const { Guest } = require('../models/index');

async function getGuest(wed, user) {
    const guestData = await Guest.findOne({
        where: {
            wedding_id: wed,
            user_id: user
        }
    });
    return guestData.get({ plain: true });
};

module.exports = getGuest;