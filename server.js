const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/product');
const Account = require('./models/account');

mongoose.connect('mongodb://localhost:27017/node-api-101', {
  useNewUrlParser: true
});

app.use(express.json());

// mock data
const products = [{}];

app.post('/products', async (req, res) => {
  const payload = req.body;
  const product = new Product(payload);
  await product.save();
  res.status(201).end();
});

// mock data
const account = [{}];

app.post('/createAccount', async (req, res) => {
  const payload = req.body;
  const account = new Account(payload);
  await account.save();

  res.json({ status : 'Success' });
  res.status(201).end();
});

app.get('/account', async (req, res) => {
  const account = await Account.find({});
  res.json(account);
});

app.listen(9000, () => {
  console.log('Application is running on port 9000');
});
