const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Products Page');
});

module.exports = router;
