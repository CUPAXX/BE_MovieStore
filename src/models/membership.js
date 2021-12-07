const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Membership = sequelize.define('memberships', {
  title: Sequelize.STRING,
  feature1: Sequelize.STRING,
  feature2: Sequelize.STRING,
  feature3: Sequelize.STRING,
  feature4: Sequelize.STRING,
  price: Sequelize.STRING,
})

module.exports = Membership