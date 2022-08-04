const uuid = require('uuid');
const { Wedding }= require('../models/')


const generateWeddingCode = async () => {
    const id = uuid.v4().slice(0, 6);
    const wed = await Wedding.findAll();
    const codes = wed.filter(input => input.code === id);
    if(codes.length > 0) {
        return generateWeddingCode();
    } else {
        return id;
    };
};

module.exports = generateWeddingCode;