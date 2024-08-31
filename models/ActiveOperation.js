const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    },
}, {
    timestamps: true,
    indexes: [
        {
            unique: true,
            fields: ['ParMoedaId', 'StrategyId'] // Restringe a combinação desses campos como única
        }
    ]
});

module.exports = ActiveOperation;
