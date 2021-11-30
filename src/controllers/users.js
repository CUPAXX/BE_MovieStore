const UserModel = require('../models/users')
const {Op} = require('sequelize')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res) => {
  const data = req.body
  data.password = await bcrypt.hash(data.password, await bcrypt.genSalt())
  const user = await UserModel.create(data)
  return res.json({
    success: true,
    message: 'user has been create',
    results: user
  })
}

exports.listUser = async (req, res) => {
  let {search='', sort, limit=5, page=1} = req.query
  let order =[]
  if(typeof sort === 'object'){
    const key = Object.keys(sort)[0]
    let value = sort[key]
    if(value === '1'){
      value = 'DESC'
    }else {
      value = 'ASC'
    }
    order.push([key, value])
  }
  if(typeof limit === 'string'){
    limit = parseInt(limit)
  }
  if(typeof page === 'string'){
    page = parseInt(page)
  }
  const user = await UserModel.findAll({
    where: {
      name: {
        [Op.substring]: search
      }
    },
    attributes: {exclude: ['password']},
    order,
    limit,
    offset: (page-1) * limit
  })
  const count = await UserModel.count()
  return res.json({
    success: true,
    message: 'List User',
    results: user,
    pageInfo: {
      totalPage: Math.ceil(count/limit),
      currentPage: page,
      limitData: limit,
      nextLink: null,
      prevLink: null
    }
  })
}