const express = require('express');
const bp = require('body-parser');
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'user2',
    password: 'password',
    database: 'knex_shopping'
  }
});
