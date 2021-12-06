const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const MovieModel = require('./movie')
const CategoryModel = require('./category')

const MovieCategory = sequelize.define('movieCategories', {
  movieId: Sequelize.INTEGER,
  categoryId: Sequelize.INTEGER,
})

// MovieCategory.belongsTo(MovieModel)
MovieCategory.belongsTo(CategoryModel)
module.exports = MovieCategory