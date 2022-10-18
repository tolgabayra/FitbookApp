const verifyAuthToken = require("./verifyAuthToken")

const verifyAdminAuthorization = (req,res,next) => {
  verifyAuthToken(req,res,() => {
    if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("You are not a ADMIN !!!");
      }
  })
}

module.exports = verifyAdminAuthorization