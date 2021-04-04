const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home listing. */
router.get('/home', async(_, res) => {
  res.json([]);
});

module.exports = router;
