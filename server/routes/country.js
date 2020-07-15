const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

/* GET country listing. */
router.get('/country', async (req, res, next) => {
  const data = await fetch("https://restcountries-v1.p.rapidapi.com/name/norge", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "a3e3add3c0msh39eb6d86a4931fap156c03jsn6542d146dc91"
	}
  })
  .then(res => res.json())
  .catch(err => {console.log(err);});

  res.json([data]);
});

module.exports = router;