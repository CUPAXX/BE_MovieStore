const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Membership = sequelize.define('memberships', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
})

module.exports = Membership