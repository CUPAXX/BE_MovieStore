const Transaction = require('../models/transaction')
const userModel = require('../models/users')

exports.createTransaction = async (req, res) => {
  const date = new Date()
  const trx = await Transaction.create({
    userId: req.authUser.id,
    refNo: date.getTime(),
    item: req.body.item,
    total: req.body.total
  })
  return res.json({
    success: true,
    message: 'Transaction SuccessFully',
    results: trx
  })
}
exports.getHistoryTransaction = async (req, res) => {
  const transaction = await Transaction.findAll({
    where: {
      userId: req.authUser.id
    }
  })
  return res.json({
    success: true,
    message: 'History transaction',
    results: transaction
  })
}

exports.getDetailHistory = async (req, res) => {
  const {id} = req.params
  const transaction = await Transaction.findByPk(id)
  return res.json({
    success: true,
    message: 'Detail History transaction',
    results: transaction
  })
}