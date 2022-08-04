const { Guest } = require('../models/index');

async function getGuest(wed, user) {
    const guestData = await Guest.findOne({
        where: {
            wedding_id: wed,
            user_id: user
        }
    });
    if(guestData != null) return guestData.get({ plain: true });
    else return {
        error: 'No guest found.'
    };
};

module.exports = getGuest;