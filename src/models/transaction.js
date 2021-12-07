const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const UserModel = require('./users')

const Transaction = sequelize.define('transactions', {
  userId: Sequelize.INTEGER,
  refNo: Sequelize.STRING,
  item: Sequelize.STRING,
  total: Sequelize.INTEGER,
})

Transaction.belongsTo(UserModel, {foreignKey: 'userId', sourceKey: 'id', as: 'userDetail'})
module.exports = Transaction