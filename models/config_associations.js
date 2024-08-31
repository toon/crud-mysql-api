// associations.js
const ParMoeda = require('./ParMoeda');
const Operation = require('./Operation');
const ActiveOperation = require('./ActiveOperation');
const Strategy = require('./Strategy');

// Define as associações
ParMoeda.hasMany(Operation, { foreignKey: 'ParMoedaId' });
ParMoeda.hasMany(ActiveOperation, { foreignKey: 'ParMoedaId' });
Strategy.hasMany(Operation, { foreignKey: 'StrategyId' });
Strategy.hasMany(ActiveOperation, { foreignKey: 'StrategyId' });
Operation.belongsTo(ParMoeda, { foreignKey: 'ParMoedaId' });
Operation.belongsTo(Strategy, { foreignKey: 'StrategyId' });
ActiveOperation.belongsTo(ParMoeda, { foreignKey: 'ParMoedaId' });
ActiveOperation.belongsTo(Strategy, { foreignKey: 'StrategyId' });

module.exports = {
    ParMoeda,
    Operation,
    ActiveOperation,
    Strategy,
}