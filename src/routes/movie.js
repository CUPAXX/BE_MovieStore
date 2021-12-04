const movies = require('express').Router()
const {createMovie, listMovie, getDetailMovie} = require('../controllers/movies')
const itemPicture = require('../helpers/upload').single('picture')

movies.post('/', itemPicture, createMovie)
movies.get('/', listMovie)
movies.get('/:id', getDetailMovie)

module.exports = movies