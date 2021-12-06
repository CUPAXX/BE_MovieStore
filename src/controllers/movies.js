const MovieModel = require('../models/movie')
const MovieCategoryModel =  require('../models/movieCategory')
const {Op} = require('sequelize')
const { APP_URL } = process.env

exports.createMovie = async (req, res) => {
  const data = req.body
  req.body.picture = req.file ? `${process.env.APP_UPLOAD_ROUTE}/${req.file.filename}` : null
  const movie = await MovieModel.create(data)
  const {idCategory} = req.body
  const movieCategory = await MovieCategoryModel.create({movieId: movie.id, categoryId: idCategory})
  return res.json({
    success: true,
    message: `Movie successfully added`,
    results: [movie, movieCategory]
  })
}

exports.listMovie = async (req, res) => {
  let {search='', sort, limit=10, page=1} = req.query
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
  const count = await MovieModel.count()
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
  const nextPage = page < Math.ceil(count / limit) ? `${APP_URL}/movie?page=${page + 1}` : null
  const prevPage = page > 1 ? `${APP_URL}/movie?page=${page - 1}` : null
  return res.json({
    success: true,
    message: 'List Movie',
    results: movie,
    pageInfo: {
      totalPage: Math.ceil(count/limit),
      currentPage: page,
      limitData: limit,
      nextLink: nextPage,
      prevLink: prevPage
    }
  })
}

exports.getDetailMovie = async (req, res) => {
 let {id} = req.params
 const movie = await MovieModel.findByPk(id)
 return res.json({
  success: true,
  message: `Detail Movie From Id: ${id}`,
  results: movie
})
}