
const users = require('express').Router()
const { createUser, listUser } = require('../controllers/users')


users.post('/', createUser)
users.get('/', listUser)


module.exports = users