// models/ParMoeda.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ParMoeda = sequelize.define('ParMoeda', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    timestamps: true
});

module.exports = ParMoeda;
