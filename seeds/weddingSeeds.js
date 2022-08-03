const { Wedding } = require('../models/index');
const weddingData = [
    {
        name: 'Some registry link',
        code: 'n4f0u1',
        partner1: 'Somebody',
        partner2: 'Somebody else',
        registry: 'www.google.com'
    },
    {
        name: 'Another registry link',
        code: 'n4f0u1',
        partner1: 'Partners',
        partner2: 'In Crime',
        registry: 'www.amazon.com'
    }
];

const seedWeddings = () =>Wedding.bulkCreate(weddingData);

module.exports = seedWeddings;