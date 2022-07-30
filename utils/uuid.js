const sequelize = require('../config/connection');
const uuid = require('uuid');
const Wedding = require('../models/Wedding')

const id = uuid.v4().slice(0, 6);
console.log(id);

// const test = async await Wedding.findAll({
//     where: {
//         code: 'n4f0u1'
//     }
// });

console.log(test);