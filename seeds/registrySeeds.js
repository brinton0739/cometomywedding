const Registry = require('../models/Registry')
const registryData = [
    {
        description: "Some registry link",
        wedding_id: 1,
    },
    {
        description: "Another registry link",
        wedding_id: 2,
    }
]

const seedRegistrys = () =>Registry.bulkCreate(registryData);

module.exports = seedRegistrys;