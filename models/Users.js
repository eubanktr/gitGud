const { Model, DataTypes, DECIMAL } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection.js');

class Users extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Users.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
        isEmail: true
        }
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [6]
        }
    },
    age: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    system_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
        model: 'systems',
        key: 'id'
        }
    },
    gamertag: {
        type: DataTypes.STRING,
        allowNull: true
    },
    psn: {
        type: DataTypes.STRING,
        allowNull: true
    },
    steamId: {
        type: DataTypes.STRING,
        allowNull: true
    }
    },
    {
    hooks: {
        beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
        },
        beforeUpdate: async (updatedUserData) => {
        if (updatedUserData.password) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        }
        return updatedUserData;
        },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'users',
    }
);
module.exports = Users;