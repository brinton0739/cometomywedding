const sequelize = require('../config/connection');
const checkUuid = require('uuid');
const Wedding = require('../models/Wedding')


const uuid = async () => {
    const id = u.v4().slice(0, 6);
    const wed = await Wedding.findAll();
    const codes = wed.map(each => {
        return each.code;
    });
    if(codes.includes(id)) uuid()
    else return id;
};

module.exports = uuid;