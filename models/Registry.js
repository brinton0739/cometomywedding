const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Registry extends Model {}

Registry.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    wedding_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'wedding',
        key: 'id',
      },
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'registry',
  }
);

module.exports = Registry;
