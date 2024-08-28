const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const ParMoeda = require('./ParMoeda');
const Strategy = require('./Strategy');

const ActiveOperation = sequelize.define('ActiveOperation', {
    ParMoedaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    StrategyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
}, {
    timestamps: true
});

module.exports = ActiveOperation;
