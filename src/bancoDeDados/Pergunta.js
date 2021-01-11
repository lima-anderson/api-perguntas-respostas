// Criar model

const { Sequelize } = require('sequelize');
const sequelize = require('./bd');


const Pergunta = sequelize.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Pergunta.sync({ force: false })
module.exports = Pergunta;