const CategoryModel = require('../models/category')
const {Op} = require('sequelize')

exports.createCategory = async (req, res) => {
  const data = req.body
  const category = await CategoryModel.create(data)
  return res.json({
    success: true,
    message: 'category has been create',
    results: category
  })
}