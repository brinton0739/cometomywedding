const Guest = require('../models/Guest')
const guestData = [
    {
        wedding_id: 1,
        access: 0,
        user_id: 1
    },
    {
        wedding_id: 2,
        access: 1,
        user_id: 1
    },
    {
        wedding_id: 2,
        access: 0,
        user_id: 2
    },
    {
        wedding_id: 1,
        access: 1,
        user_id: 2
    }
]

const seedGuests = () =>Guest.bulkCreate(guestData);

module.exports = seedGuests;