const CategoryModel = require('../models/category')
const MovieModel = require('../models/movie')
const MovieCategory = require('../models/movieCategory')
const {Op} = require('sequelize')

exports.createCategory = async (req, res) => {
  const data = req.body
  const category = await CategoryModel.create(data)
  return res.json({
    success: true,
    message: 'category has been create',
    results: category
  })
}

exports.GetCategory = async (req, res) => {
  const category = await CategoryModel.findAll()
  return res.json({
    success: true,
    message: 'List Category',
    results: category
  })
}

exports.getMovieByCategory = async (req, res) => {
  const {id} = req.params
  const movie = await MovieModel.findAll({
    include: [{
      model: MovieCategory,
      as: 'category',
      // attributes: {exclude: ['movieId', 'id', 'createdAt', 'updatedAt']},
      where: {
        categoryId: id
      }
    }]
  })
  return res.json({
    success: true,
    message: 'List Movie',
    results: movie
  })
}