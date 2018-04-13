const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'user2',
    password: 'password',
    database: 'knex_shopping'
  }
});
const GET_user_id = id => {
  return knex('users')
    .where({ id })
    .select();
};
module.exports = { GET_user_id };
