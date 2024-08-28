// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud-data', 'root', 'hi2o10', {
    host: 'localhost',
    dialect: 'mysql'
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;