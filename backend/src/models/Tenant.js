const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Tenant extends Model {}

Tenant.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize,
    modelName: 'Tenant',
    tableName: 'tenants',
    timestamps: true,
});

module.exports = Tenant;