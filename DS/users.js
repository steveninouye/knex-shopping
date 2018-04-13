const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'user2',
    password: 'password',
    database: 'knex_shopping'
  }
});
const GET_users_id = id => {
  return knex('users')
    .where({ id })
    .select();
};

const POST_users_login = email => {
  return knex('users')
    .where({ email })
    .select();
};

const POST_users_register = email => {
  return knex('users')
    .where({ email })
    .select();
};

const insertUser = (email, password) => {
  return knex('users').insert([{ email, password }], '*');
};

const PUT_userID_forgot_password = id => {
  return knex('users')
    .where('id', id)
    .select();
};

const updateUserPassword = (id, password) => {
  return knex('users')
    .where('id', id)
    .update({ password }, '*');
};

const DELETE_userID = id => {
  return knex('users')
    .where('id', id)
    .select();
};

const deleteUserID = id => {
  return knex('users')
    .where('id', id)
    .del();
};

module.exports = {
  GET_users_id,
  POST_users_login,
  POST_users_register,
  insertUser,
  PUT_userID_forgot_password,
  updateUserPassword,
  DELETE_userID,
  deleteUserID
};
