const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const MovieCategory = require('./movieCategory')

const Category = sequelize.define('categories', {
  name: Sequelize.STRING,
})
// Category.hasMany(MovieCategory)
module.exports = Category