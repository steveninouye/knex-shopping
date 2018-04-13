const router = require('express').Router();
const { GET_user_id } = require('../DS/users');

router.get('/', (req, res) => {
  res.send('User Page');
});

router.get('/:user_id', (req, res) => {
  GET_user_id(req.params.user_id)
    .then(user => {
      const message = user[0] ? user[0] : { message: 'User not found' };
      res.send(message);
    })
    .catch(err => {
      res.send('User not found');
    });
});

router.post('/users/login', (req, res) => {
  GET_user_login(req.body.email, req.body.password)
    .then(data => {})
    .catch(err => {});
});

module.exports = router;
