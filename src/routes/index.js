
const router = require('express').Router()

const users = require('./users')
const auth = require('./auth')
const movie = require('./movie')
const membership = require('./membership')


router.use('/users', users)
router.use('/auth', auth)
router.use('/movie', movie)
router.use('/membership', membership)

module.exports = router