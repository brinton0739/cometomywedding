const Sequelize = require('sequelize');
require('dotenv').config();

<<<<<<< HEAD
const sequelize = (process.env.JAWSDB_URL) ? new Sequelize(process.env.JAWSDB_URL) : new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3336,
  }
);
=======
const sequelize = new Sequelize(process.env.JAWSDB_URL);

// const sequelize = (process.env.JAWSDB_URL)
// ? new Sequelize(process.env.JAWSDB_URL,
//                 // process.env.AWS_ACCESS_KEY,
//                 // process.env.AWS_SECRET_ACCESS_KEY,
//                 // process.env.AWS_BUCKET,
//                 // process.env.AWS_REGION,
//                 // process.env.SECRET_SALT
//   )        
// : new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306,
//   }
// );







>>>>>>> d1c5a32150fecbf338bf9144549ce6cfaa561057

module.exports = sequelize;