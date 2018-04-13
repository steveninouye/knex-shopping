const express = require('express');
const bp = require('body-parser');
const knex = require('./knex/knex.js');
const PORT = process.env.PORT || 3000;

const users = require('./routes/users');
const products = require('./routes/products');
const cart = require('./routes/cart');

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: false }));

app.use('/users', users);
app.use('/products', products);
app.use('/cart', cart);

app.listen(PORT, () => {
  console.log(`Server listening on Port ${PORT}`);
});
