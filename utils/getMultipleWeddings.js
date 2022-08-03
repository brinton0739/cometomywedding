const { User, Guest, Wedding } = require('../models/index');

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
    return weddingData.map(wedding => {
        const wed = wedding.wedding.get({ plain: true });
        wed.access = wedding.access;
        return wed;
    });
};

module.exports = getMultipleWeddings;