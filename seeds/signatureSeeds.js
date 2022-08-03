const { Signature } = require('../models/index');
const signatureData = [
    {
        body: 'A signature',
        wedding_id: 1,
        guest_id: 1
    },
    {
        body: 'A signature',
        wedding_id: 1,
        guest_id: 4
    },
];

const seedSignatures = () =>Signature.bulkCreate(signatureData);

module.exports = seedSignatures;