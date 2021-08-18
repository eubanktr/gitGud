const { Model, DataTypes, DECIMAL } = require('sequelize');

const sequelize = require('../config/connection.js');

class Ratings extends Model {}

Ratings.init(
    {
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