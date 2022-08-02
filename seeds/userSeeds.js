const User = require('../models/User')
// password is the hash for "password1"
const userData = [
    {
        first_name: "John",
        last_name: "Doe",
        email: "john@aol.com",
        password: '$2b$10$UbyHlQ1CpCYnizGzj2aMQuYADBrDptqJChpWNrl2xrLJAr44SLvTK'
    },
    {
        first_name: "Jane",
        last_name: "Foe",
        email: "jane@aol.com",
        password: '$2b$10$UbyHlQ1CpCYnizGzj2aMQuYADBrDptqJChpWNrl2xrLJAr44SLvTK'
    }
]

const seedUsers = () =>User.bulkCreate(userData);

module.exports = seedUsers;