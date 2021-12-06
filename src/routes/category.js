const category = require('express').Router()
const {createCategory, getMovieByCategory, GetCategory} = require('../controllers/category')

category.post('/', createCategory)
category.get('/', GetCategory)
category.get('/:id', getMovieByCategory)

module.exports = category