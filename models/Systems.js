const { Model, DataTypes, DECIMAL } = require('sequelize');

const sequelize = require('../config/connection.js');

class Systems extends Model {}

Systems.init({
    id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true,
    autoIncrement: true,
    },
    system_name: {
    type: DataTypes.STRING,
    allowNull: false
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'systems',
})
module.exports = Systems;