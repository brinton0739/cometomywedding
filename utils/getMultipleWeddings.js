const { Guest, Wedding } = require('../models/');

async function getMultipleWeddings(user) {
    const weddingData = await Guest.findAll({
        where: {
            user_id: user
        },
        include: [
            {
                model: Wedding
            }
        ]
    });
    if (weddingData != null) {
        return weddingData.map(wedding => {
            const wed = wedding.wedding.get({ plain: true });
            wed.access = wedding.access;
            return wed;
        });
    } else return {
        error: 'No Weddings found for that User.'
    };
};

module.exports = getMultipleWeddings;