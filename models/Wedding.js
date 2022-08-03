const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Wedding extends Model {}

Wedding.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    partner1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    partner2: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'wedding',
  }
);

module.exports = Wedding;
