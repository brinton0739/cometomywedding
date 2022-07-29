const seedUsers = require('./userSeeds');
const seedGuests = require('./guestSeeds');
const seedEvents = require('./eventSeeds');
const seedLocations = require('./locationSeeds');
const seedRegistrys = require('./registrySeeds');
const seedWeddings = require('./weddingSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  await seedGuests();
  await seedEvents();
  await seedLocations();
  await seedRegistrys();
  await seedWeddings();
  console.log('\n----- USERS SEEDED -----\n');

  

  process.exit(0);
};

seedAll()
