const { User, Guest, Signature } = require('../models/index');

async function getSignatures(wed) {
    const signatureData = await Signature.findAll({
        where: {
            wedding_id: wed
        },
        include: [
            {
              model: Guest,
              where: {
                wedding_id: wed
              },
              include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name']
                }
              ]
            },
          ],
    });
    return signatureData.map(signature => {
        return signature.get({ plain: true });
    });
}

module.exports = getSignatures;