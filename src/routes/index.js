
const router = require('express').Router()

const users = require('./users')
const auth = require('./auth')
const movie = require('./movie')
const membership = require('./membership')
const category = require('./category')
const transaction = require('./transaction')


router.use('/users', users)
router.use('/auth', auth)
router.use('/movie', movie)
router.use('/membership', membership)
router.use('/category', category)
router.use('/transaction', transaction)

module.exports = router