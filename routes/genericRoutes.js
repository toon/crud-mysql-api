const express = require('express');
const router = express.Router();
const genericController = require('../controllers/genericController');

// Importar os modelos que você deseja usar
const models = {
    parmoeda: require('../models/ParMoeda'),
    strategy: require('../models/Strategy'),
    activeoperation: require('../models/ActiveOperation'),
    operation: require('../models/Operation'),
    // Adicione mais modelos aqui
};

// Função para gerar rotas genéricas
Object.keys(models).forEach((key) => {
    const model = models[key];

    // Define rotas CRUD genéricas
    router.post(`/${key}`, genericController.create(model));
    router.get(`/${key}`, genericController.getAll(model));
    router.put(`/${key}/:id`, genericController.update(model));
    router.delete(`/${key}/:id`, genericController.remove(model));
});

module.exports = router;