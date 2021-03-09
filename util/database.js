const Sequelize = require('sequelize');

const sequelize = new Sequelize('assignment5', 'root', 'neel1999', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;