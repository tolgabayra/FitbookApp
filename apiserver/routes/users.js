const router = require("express").Router()
const UserController = require("../controllers/UserController")
const schema = require("../validations/Users")
const validate = require("../middlewares/verifyValidate")

router.get("/:id",UserController.getUser)
router.get("/" ,UserController.getAllUser)
router.delete("/:id",UserController.deleteUser)
router.put("/:id",validate(schema.createValidation) ,UserController.updateUser)

module.exports = router