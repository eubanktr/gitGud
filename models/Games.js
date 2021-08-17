const { Model, DataTypes, DECIMAL } = require('sequelize');

const sequelize = require('../config/connection.js');

class Games extends Model {}

Games.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    game_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ratings_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'ratings',
        key: 'id'
        }
    }
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'games',
    }
);
module.exports = Games;