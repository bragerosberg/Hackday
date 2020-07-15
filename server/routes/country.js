var express = require('express');
var router = express.Router();

/* GET country listing. */
router.get('/country', function(req, res, next) {
  res.json([]);
});

module.exports = router;
