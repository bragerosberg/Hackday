var express = require('express');
var router = express.Router();

/* GET weather listing. */
router.get('/weather', async (req, res, next) => {
  const data = await /* fetch weather */
    .then(res => res.json())
    .catch(err => {console.log(err);});

    res.json([data]);
});

module.exports = router;
