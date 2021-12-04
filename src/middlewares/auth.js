const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  if(req.headers?.authorization) {
    if(req.headers.authorization.startsWith('Bearer')){
      try{
        const token = req.headers.authorization.slice(7)
        const user = jwt.verify(token, process.env.APP_KEY)
        req.authUser = user
        next()
      }catch (err) {
        return res.status(500).json({
          success: false,
          message: "Session Expired, You need to login again!!"
        })
      }
    }
  }else {
    return res.status(500).json({
      success: false,
      message: "We need Auth Token!!!"
    })
  }
}

module.exports = auth