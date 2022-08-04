const { Wedding } = require('../models/');

async function getWedding(wed) {
    const weddingData = await Wedding.findByPk(wed);
    if (weddingData != null) return weddingData.get({ plain: true });
    else return {
        error: 'No Wedding found with that ID.'
    };
};

module.exports = getWedding;