const {Sequelize, Model, DataTypes} = require('sequelize')

const sequelize = new Sequelize('userDetails', 'root' , null, {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate();
    console.log('Connection established successfully');
} catch (err) {
    console.log('Unable to Connect', err);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, DataTypes , Model)
db.sequelize.sync({alter : true})

module.exports = db;