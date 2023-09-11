const Sequelize=require('sequelize');
const sequelize= new Sequelize('node-complete','root','Ak7558534825@', {
    dialect:'mysql',
    host:'localhost'
})
module.exports = sequelize;