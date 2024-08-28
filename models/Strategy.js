const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Operation = require('./Operation');
const ActiveOperation = require('./ActiveOperation');

const Strategy = sequelize.define('Strategy', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    timestamps: true
});

// Define a associação 
// Strategy.hasMany(Operation, { foreignKey: 'StrategyId' });
// Strategy.hasMany(ActiveOperation, { foreignKey: 'StrategyId' });

module.exports = Strategy;
