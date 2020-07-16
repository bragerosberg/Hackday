const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
require('dotenv').config();

/* GET country listing. */
router.get('/country', async (req, res, next) => {
  const data = await fetch("https://restcountries-v1.p.rapidapi.com/name/norge", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": `${process.env.COUNTRY_KEY}`
	}})
    .then(res => res.json())
    .catch(err => {console.log(err);});
  res.json(data);
});

module.exports = router;