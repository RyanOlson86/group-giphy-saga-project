const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
require('dotenv').config()

const router = express.Router();

router.get('/', (req, res) => {
    const apiKey = process.env.GIPHY_API_KEY; // GIPHY_API_KEY is stored in .env
    const limit = '10'
    const searchParam = req.body.search

    axios.get(`http://api.giphy.com/v1/gifs/search/?api_key=${apiKey}&q=${searchParam}&limit=${limit}`) // NEED "?api_key=XXXXXXXXXXXXXX" after /trending
    .then((response) => {
        const urlArray = response.data.data.map(url => url.images.original.url)
        res.send(urlArray)
    })
    .catch(error => {
        console.log('Error in GET giphy', error)
        res.sendStatus(500)
    })
});

module.exports = router;
