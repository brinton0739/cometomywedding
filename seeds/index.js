const seedUsers = require('./userSeeds');
const seedGuests = require('./guestSeeds');
const seedEvents = require('./eventSeeds');
const seedRegistrys = require('./registrySeeds');
const seedWeddings = require('./weddingSeeds');
const seedSignatures = require('./signatureSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  await seedWeddings();
  await seedGuests();
<<<<<<< HEAD
  await seedEvents();
=======
  await seedLocations();
  // await seedEvents();
>>>>>>> a79ee2e62fdabc455035893cf4021eb20296fb9b
  await seedRegistrys();
  await seedSignatures();
  console.log('\n----- USERS SEEDED -----\n');

  

  process.exit(0);
};

seedAll()
