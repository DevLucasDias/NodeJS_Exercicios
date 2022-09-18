const Sequelize = require('sequelize');
const db = require('./dbconnection');

const Users = db.define('users',
{
    userID:{
        type: Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : key
    },
    name:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    username:{
        type: Sequelize.STRING,
        allowNull : false,
    },
    password:{
        type: Sequelize.STRING,
        allowNull : false,
    },
})

module.exports = Users;