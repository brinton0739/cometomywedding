const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Signature extends Model {}

Signature.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    wedding_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wedding',
        key: 'id',
      },
    },
    guest_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'guest',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'signature',
  }
);

module.exports = Signature;