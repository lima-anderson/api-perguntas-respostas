// Fazer a conexão

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    host: 'localhost',
    storage: './bd.sqlite'
    
    
});
 
module.exports = sequelize;