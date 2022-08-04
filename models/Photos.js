const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Photos extends Model { };

Photos.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'guest',
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
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'photos',
  }
);

module.exports = Photos;