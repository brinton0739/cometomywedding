const Location = require('../models/Location')
const locationData = [
    {
        name: 'Saul Goodman & Associates',
        address: '9800 Montgomery Blvd NE, Albuquerque, NM 87111',
    },
    {
        name: 'The Pie Pizzeria',
        address: '7186 Union Park Ave, Midvale, UT 84047',
    }
]

const seedLocations = () =>Location.bulkCreate(locationData);

module.exports = seedLocations;