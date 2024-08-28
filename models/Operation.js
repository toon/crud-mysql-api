const { DataTypes, ForeignKeyConstraintError } = require('sequelize');
const sequelize = require('../config/db');

const Operation = sequelize.define('Operation', {
    ParMoedaId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    StrategyId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // true quando comprado, false quando vendido
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
    buyprice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    sellprice: {
        type: DataTypes.FLOAT,
        allowNull: false
    },

}, {
    timestamps: true
});

module.exports = Operation;
