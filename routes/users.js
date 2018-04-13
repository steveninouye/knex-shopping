const router = require('express').Router();
const {
  GET_users_id,
  POST_users_login,
  POST_users_register,
  insertUser,
  PUT_userID_forgot_password,
  updateUserPassword,
  DELETE_userID,
  deleteUserID
} = require('../DS/users');

router.get('/', (req, res) => {
  res.send('User Page');
});

router.get('/:user_id', (req, res) => {
  GET_users_id(req.params.user_id)
    .then(user => {
      //check if user exists
      const message = user[0] ? user[0] : { message: 'User not found' };
      //send response
      res.send(message);
    })
    //handle any errors connecting to database or acquiring data
    .catch(err => {
      res.send('Could Not Get Data ' + err);
    });
});

router.post('/login', (req, res) => {
  POST_users_login(req.body.email)
    .then(user => {
      //check if user exists
      let message = user[0] ? user[0] : { message: 'User not found' };
      //if user exists
      if (user[0]) {
        //check if password is correct
        message =
          user[0].password === req.body.password
            ? user[0]
            : { message: 'Incorrect password' };
      }
      //send response
      res.send(message);
    })
    //handle any errors connecting to database or acquiring data
    .catch(err => {
      res.send('Could Not Get Data ' + err);
    });
});

router.post('/register', (req, res) => {
  POST_users_register(req.body.email)
    .then(user => {
      let message = user[0] ? { message: 'User already exists' } : user[0];
      if (!user[0]) {
        console.log(req.body.email);
        console.log(req.body.password);
        insertUser(req.body.email, req.body.password)
          .then(user => {
            res.send(user[0]);
          })
          .catch(err => {
            res.send('Could Not Insert User ' + err);
          });
      } else {
        res.send(message);
      }
    })
    .catch(err => {
      res.send('Could Not Get Data ' + err);
    });
});

router.put('/:user_id/forgot-password', (req, res) => {
  PUT_userID_forgot_password(req.params.user_id)
    .then(user => {
      if (user[0]) {
        updateUserPassword(req.params.user_id, req.body.password)
          .then(user => {
            res.send({ message: 'New password created!' });
          })
          .catch(err => {
            res.send(err);
          });
      } else {
        res.send('Could Not Find User');
      }
    })
    .catch(err => {
      res.send('Could Not Get Data ' + err);
    });
});

router.delete('/:user_id', (req, res) => {
  DELETE_userID(req.params.user_id)
    .then(user => {
      if (user[0]) {
        deleteUserID(req.params.user_id)
          .then(data => {
            res.send({
              message: `User id: ${req.params.user_id} successfully deleted`
            });
          })
          .catch(err => {
            res.send(err);
          });
      } else {
        res.send({ message: 'User ID not found' });
      }
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
