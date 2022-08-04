const { User, Guest, Signature } = require('../models/');

async function getSignatures(wed) {
  const signatureData = await Signature.findAll({
    where: {
      wedding_id: wed
    },
    include: [
      {
        model: Guest,
        include: [
          {
            model: User,
            attributes: ['first_name', 'last_name', 'email']
          }
        ]
      },
    ],
  });
  if (signatureData != null) {
    return signatureData.map(signature => {
      return signature.get({ plain: true });
    });
  } else return {
    error: 'No Signatures found for that Wedding.'
  };
};

module.exports = getSignatures;