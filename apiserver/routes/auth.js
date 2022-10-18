const router = require("express").Router()
const AuthController = require("../controllers/AuthController")
const schema = require("../validations/Users")
const validate = require("../middlewares/verifyValidate")

router.post("/login",validate(schema.loginValidation) ,AuthController.login)
router.post("/register",validate(schema.createValidation) ,AuthController.register)
router.post("/logout", AuthController.logout)


module.exports = router