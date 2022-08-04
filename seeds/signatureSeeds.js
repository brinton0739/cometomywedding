const { Signature } = require('../models/');
const signatureData = [
    {
        body: 'A signature',
        wedding_id: 1,
        guest_id: 1
    },
    {
        body: 'A sig2ature',
        wedding_id: 1,
        guest_id: 4
    },
    {
        body: 'A signature',
        wedding_id: 2,
        guest_id: 1
    },
    {
        body: 'A sig2ature',
        wedding_id: 2,
        guest_id: 4
    },
];

const seedSignatures = () =>Signature.bulkCreate(signatureData);

module.exports = seedSignatures;