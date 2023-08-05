const db = require("../models")

const Product = db.products
const Review = db.reviews


const addProduct = async (req, res) => {
    try{
        let info = {
            title: req.body.title,
            price: req.body.price,
            description: req.body.description,
            published: req.body.published ? req.body.published : false
        }
    
        const product = await Product.create(info)
        res.status(200).send(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the product" });
    }
}


const getAllProducts = async (req, res) => {
    let products = await Product.findAll();
    res.status(200).send(products)
}

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id } })
    res.status(200).send(product)
}


const updateProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.update(req.body, { where: { id: id } })
    res.status(200).send(product)
}


const deleteProduct = async (req, res) => {

    let id = req.params.id
    await Product.destroy({ where: { id: id } })
    res.status(200).send("product is deleted")
}

const getPublishedProduct = async (req, res) => {
    const products = await Product.findAll({ where: { published: true } })
    res.status(200).send(products)
}


module.exports = {

    addProduct, getAllProducts, getOneProduct, deleteProduct, updateProduct, getPublishedProduct

}