const router = require("express").Router()
const ProductController = require("../controllers/ProductController")
const schema = require("../validations/Product")
const validate = require("../middlewares/verifyValidate")


router.get("/:id",ProductController.getProduct)
router.get("/",ProductController.getAllProduct)
router.post("/", validate(schema.createValidation) ,ProductController.createProduct)
router.delete("/:id",ProductController.deleteProduct)
router.put("/:id", validate(schema.createValidation) ,ProductController.updateProduct)


module.exports = router