import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRoutes from './routes/seedRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODP_URI)
  .then(() => {
    console.log('CONNECT TO DB');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use('/api/seed', seedRoutes);

app.use('/api/products/', productRoutes);

const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`serve work at ${port}`);
});
