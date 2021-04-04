const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

/* GET weather listing. */
router.get('/', async (_, res) => {
  const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Oslo&units=metric&appid=${process.env.WEATHER_KEY}`)
    .then(res => res.json())
    .catch(err => {console.log(err);});
  res.json(data);
});




module.exports = router;
