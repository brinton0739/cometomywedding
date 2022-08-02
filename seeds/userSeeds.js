const { User } = require('../models/index');
const userData = [
    {
        first_name: "John",
        last_name: "Doe",
        email: "john@aol.com",
        password: 'password1'
    },
    {
        first_name: "Jane",
        last_name: "Foe",
        email: "jane@aol.com",
        password: 'password2'
    }
];

const seedUsers = () =>User.bulkCreate(userData);

module.exports = seedUsers;