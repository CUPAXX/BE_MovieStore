const MembershipModel = require('../models/membership')
const {Op} = require('sequelize')

exports.createMembership = async (req, res) => {
  const data = req.body
  const membership = await MembershipModel.create(data)
  return res.json({
    success: true,
    message: 'Membership successfully added',
    results: membership
  })
}

exports.listMembership = async (req, res) => {
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
  const membership = await MembershipModel.findAll({
    where: {
      title: {
        [Op.substring]: search
      }
    },
    order,
    limit,
    offset: (page-1) * limit
  })
  const count = await MembershipModel.count()
  return res.json({
    success: true,
    message: 'List membership',
    results: membership,
    pageInfo: {
      totalPage: Math.ceil(count/limit),
      currentPage: page,
      limitData: limit,
      nextLink: null,
      prevLink: null
    }
  })
}