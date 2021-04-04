const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', async(_, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;