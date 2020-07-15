const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home listing. */
router.get('/home', async(req, res, next) => {
  res.json([]);
});

module.exports = router;
