import express from 'express';
import Product from '../models/productModel.js';

const productRoutes = express.Router();

productRoutes.get('/', async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

productRoutes.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

productRoutes.get('/:id', async (req, res) => {
  const product = await data.products.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRoutes;
