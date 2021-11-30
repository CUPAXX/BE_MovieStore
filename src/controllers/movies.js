const MovieModel = require('../models/movie')
const {Op} = require('sequelize')

exports.createMovie = async (req, res) => {
  const data = req.body
  req.body.picture = req.file ? `${process.env.APP_UPLOAD_ROUTE}/${req.file.filename}` : null
  const movie = await MovieModel.create(data)
  return res.json({
    success: true,
    message: 'Movie successfully added',
    results: movie
  })
}

exports.listMovie = async (req, res) => {
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
  const movie = await MovieModel.findAll({
    where: {
      title: {
        [Op.substring]: search
      }
    },
    order,
    limit,
    offset: (page-1) * limit
  })
  const count = await MovieModel.count()
  return res.json({
    success: true,
    message: 'List Movie',
    results: movie,
    pageInfo: {
      totalPage: Math.ceil(count/limit),
      currentPage: page,
      limitData: limit,
      nextLink: null,
      prevLink: null
    }
  })
}