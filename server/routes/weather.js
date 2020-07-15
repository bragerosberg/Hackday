var express = require('express');
var router = express.Router();

/* GET weather listing. */
router.get('/weather', function(req, res, next) {
  res.json([]);
});

module.exports = router;
