const transaction = require('express').Router()
const {createTransaction, getHistoryTransaction, getDetailHistory} = require('../controllers/transaction')
const auth  = require('../middlewares/auth')

transaction.post('/', auth, createTransaction)
transaction.get('/', auth, getHistoryTransaction)
transaction.get('/:id', auth, getDetailHistory)
// transaction.get('/', GetTransaction)

module.exports = transaction