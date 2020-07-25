const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();


/* GET esport listing. */
router.get('/', async (req, res, next) => {
  const data = await fetch(`https://api.pandascore.co/csgo/matches?token=${process.env.ESPORT_KEY}&filter[id]=551926`)
    .then(res => res.json())
    .catch(err => {console.log(err);});
  
    res.json(data);
});

module.exports = router;
