const { Registry } = require('../models/index');
const registryData = [
    {
        description: "Some registry link,another one,again",
        wedding_id: 1,
    },
    {
        description: "Another registry link",
        wedding_id: 2,
    }
];

const seedRegistrys = () =>Registry.bulkCreate(registryData);

module.exports = seedRegistrys;