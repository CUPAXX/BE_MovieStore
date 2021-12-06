const category = require('express').Router()
const {createCategory, getMovieByCategory} = require('../controllers/category')

category.post('/', createCategory)
category.get('/get/:id', getMovieByCategory)

module.exports = category