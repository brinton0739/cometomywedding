const { Wedding } = require('../models/index');

async function getWedding(wed) {
    const weddingData = await Wedding.findByPk(wed);
    return weddingData.get({ plain: true });
};

module.exports = getWedding;