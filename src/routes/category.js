const category = require('express').Router()
const {createCategory} = require('../controllers/category')

category.post('/', createCategory)

module.exports = category