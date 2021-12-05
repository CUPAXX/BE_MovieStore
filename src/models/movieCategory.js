const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')
const MovieModel = require('./movie')
const CategoryModel = require('./category')

const MovieCategory = sequelize.define('movieCategories', {
  movieId: Sequelize.INTEGER,
  categoryId: Sequelize.INTEGER,
})

MovieCategory.belongsTo(MovieModel, {foreignKey: 'movieId', sourceKey: 'id', as: 'movieDetail'})
MovieCategory.belongsTo(CategoryModel, {foreignKey: 'categoryId', sourceKey: 'id', as: 'categoryDetail'})
module.exports = MovieCategory