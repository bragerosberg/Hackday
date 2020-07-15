var express = require('express');
var router = express.Router();

/* GET esport listing. */
router.get('/esport', function(req, res, next) {
  res.json([]);
});

module.exports = router;
