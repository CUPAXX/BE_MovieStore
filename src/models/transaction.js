const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const UserModel = require('./users')

const Transaction = sequelize.define('transactions', {
  userId: Sequelize.INTEGER,
  refNo: Sequelize.STRING,
  item: Sequelize.STRING,
  price: Sequelize.STRING,
})

Transaction.belongTo(UserModel, {foreignKey: 'userId', sourceKey: 'id', as: 'userDetail'})

module.exports = Transaction