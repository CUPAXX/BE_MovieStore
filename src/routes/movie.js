const movies = require('express').Router()
const {createMovie, listMovie} = require('../controllers/movies')
const itemPicture = require('../helpers/upload').single('picture')

movies.post('/', itemPicture, createMovie)
movies.get('/', listMovie)

module.exports = movies