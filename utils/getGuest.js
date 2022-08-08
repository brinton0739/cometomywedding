/** helper to get guest id */
const { Guest } = require('../models/');

async function getGuest(wed, user) {
    const guestData = await Guest.findOne({
        where: {
            wedding_id: wed,
            user_id: user
        }
    });
    if(guestData != null) return guestData.get({ plain: true });
    else return {
        error: 'No Guest found with parameters.'
    };
};

module.exports = getGuest;