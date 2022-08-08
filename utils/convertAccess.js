/** helper to check if user is creator of wedding */
async function convertAccess(guest) {
  switch(guest.access) {
    case 0: {
      guest.admin = 1;
      break;
    }
    case 1: {
      guest.normal = 1;
      break;
    }
    default: {
      guest.restricted = 1;
    };
  };
};
  
module.exports = convertAccess;
