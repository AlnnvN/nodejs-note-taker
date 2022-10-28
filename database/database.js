const Sequelize = require('sequelize');

const connection = new Sequelize('notetaker','root','123456',{
    host:'127.0.0.1',
    dialect:'mysql'
})

module.exports = connection;