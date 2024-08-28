const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const genericRoutes = require('./routes/genericRoutes')

const ParMoeda = require('./models/ParMoeda');
const Strategy = require('./models/Strategy');
const ActiveOperation = require('./models/ActiveOperation');

require('./models/config_associations')

// const ActiveOperation = require('./models/ActiveOperation');

const app = express();
app.use(cors());
app.use(express.json());

// Usar rotas genéricas
app.use('/api', genericRoutes);

// Função para adicionar dados iniciais
async function insertInitialData() {
    try {
        // Verifica se já existem pares de moeda na tabela
        const parmoedasCount = await ParMoeda.count();
        
        if (parmoedasCount === 0) {
            // Insere dados iniciais
            await ParMoeda.bulkCreate([
                { name: 'BTCUSDT', active: 'true' },
                { name: 'ETCUSDT', active: 'true' },
                { name: 'BATUSDT', active: 'false' }
            ]);

            console.log('Dados iniciais de pares de moeda inseridos.');
        } else {
            console.log('Já existem dados na tabela e pares de moeda. Nenhuma inserção foi realizada.');
        }
    } catch (error) {
        console.error('Erro ao inserir dados iniciais em pares de moeda:', error);
    }

    try {
        // Verifica se já existem pares de moeda na tabela
        const strategiesCount = await Strategy.count();
        
        if (strategiesCount === 0) {
            // Insere dados iniciais
            await Strategy.bulkCreate([
                { name: 'Pullback de baixa 3 2 3', description: 'Compra quando cai 3%, vende quando sobe 2% ou cai mais 3%', active: 'true' },
                { name: 'Pullback de baixa 2 1.5 3', description: 'Compra quando cai 2%, vende quando sobe 1.5% ou cai mais 3%', active: 'true' },
            ]);

            console.log('Dados iniciais de pares de moeda inseridos.');
        } else {
            console.log('Já existem dados na tabela e pares de moeda. Nenhuma inserção foi realizada.');
        }
    } catch (error) {
        console.error('Erro ao inserir dados iniciais em pares de moeda:', error);
    }

    try {
        const activeoperationCount = await ActiveOperation.count();
        
        if (activeoperationCount === 0) {
            // Insere dados iniciais
            await ActiveOperation.bulkCreate([
                { ParMoedaId: 1, StrategyId: 1 },
                { ParMoedaId: 2, StrategyId: 1 },
                { ParMoedaId: 3, StrategyId: 2 },
            ]);

            console.log('Dados iniciais de active operation inseridos.');
        } else {
            console.log('Já existem dados na tabela e active operation. Nenhuma inserção foi realizada.');
        }
    } catch (error) {
        console.error('Erro ao inserir dados iniciais em active operation:', error);
    }

}

// Sincronizar os modelos e iniciar o servidor
sequelize.sync({ force: true }) // 'force: true' recria as tabelas a cada início
    .then(async () => {
        // Insere os dados iniciais
        await insertInitialData();

        // Inicia o servidor
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch((error) => {
        console.error('Erro ao sincronizar o banco de dados:', error);
    });
