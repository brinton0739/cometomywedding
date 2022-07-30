const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Event extends Model {}

Event.init(
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
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'location',
        key: 'id',
      },
    },
    wedding_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wedding',
        key: 'id',
      },
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dress_code: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'event',
  }
);

module.exports = Event;