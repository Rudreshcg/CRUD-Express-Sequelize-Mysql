const productController = require("../controllers/productController")

const router = require("express").Router();

router.post("/addproduct", productController.addProduct)

router.get("/allproducts", productController.getAllProducts)

router.get("/product/:id", productController.getOneProduct)

router.put("/updateproduct/:id", productController.updateProduct)

router.delete("/deleteproduct/:id", productController.deleteProduct)

router.get("/published", productController.getPublishedProduct)


module.exports = router