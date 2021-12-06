const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const MovieCategoryModel = require('./movieCategory')
const Category = require('./category')

const Movie = sequelize.define('movies', {
  title: Sequelize.STRING,
  picture: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
})
Movie.hasMany(MovieCategoryModel, {as: 'category'})
module.exports = Movie