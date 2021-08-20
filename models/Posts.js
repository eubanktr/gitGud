const { Model, DataTypes, DECIMAL } = require('sequelize');

const sequelize = require('../config/connection.js');

class Posts extends Model {};

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    game: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;