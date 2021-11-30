const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const User = sequelize.define('users', {
  email: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
})

module.exports = User