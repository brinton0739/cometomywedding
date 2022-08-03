const seedUsers = require('./userSeeds');
const seedGuests = require('./guestSeeds');
const seedEvents = require('./eventSeeds');
const seedLocations = require('./locationSeeds');
const seedRegistrys = require('./registrySeeds');
const seedWeddings = require('./weddingSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  await seedWeddings();
  await seedGuests();
  await seedLocations();
  // await seedEvents();
  await seedRegistrys();
  console.log('\n----- USERS SEEDED -----\n');

  

  process.exit(0);
};

seedAll()
