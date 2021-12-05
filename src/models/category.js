const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Category = sequelize.define('categories', {
  name: Sequelize.STRING,
})

module.exports = Category