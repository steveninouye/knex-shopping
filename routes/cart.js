const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Cart Page');
});

module.exports = router;
