const { Model, DataTypes, DECIMAL } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ratings extends Model {}

Ratings.init(
    {
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true,
    },
    rating_letter: {
    type: DataTypes.STRING,
    allowNull: false,
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'ratings',
})
module.exports = Ratings;