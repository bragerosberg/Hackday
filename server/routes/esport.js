const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();


/* GET esport listing. */
router.get('/', async (_, res) => {
  const data = await fetch(`https://api.covid19api.com/summary`)
    .then(res => res.json())
    .catch(err => {console.log(err);});

    res.json(data);
});

module.exports = router;
