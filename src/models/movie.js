const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Movie = sequelize.define('movies', {
  title: Sequelize.STRING,
  picture: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
})

module.exports = Movie