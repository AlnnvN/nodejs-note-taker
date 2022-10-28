const Sequelize = require('sequelize');
const database = require('./database.js');

const Note = database.define('note',{
    content:{
        type: Sequelize.TEXT,
        allowNULL: false
    },
},{})

Note.sync({force:false});

module.exports = Note;