const Sequelize = require('sequelize');

const componentSequlize = new Sequelize('mysql_jscrud', 'homestead', 'secret', 
{
    dialect: 'mysql', host: '192.168.56.56'
});

module.exports = componentSequlize;