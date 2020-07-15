const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET esport listing. */
router.get('/esport', async (req, res, next) => {
  const data = await /* fetch esport */
    .then(res => res.json())
    .catch(err => {console.log(err);});
  
    res.json([data]);
});

module.exports = router;
