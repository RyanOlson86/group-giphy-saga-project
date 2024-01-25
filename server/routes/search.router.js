const express = require('express');
const pool = require('../modules/pool');
const { default: axios } = require('axios');
require('dotenv').config()

const router = express.Router();

router.get('/:search', (req, res) => {
    // initialize an API Key var with process.env.API_KEY
    const apiKey = process.env.GIPHY_API_KEY;
    // initialize a limit var. This will be used as a search param to limit our search results
    const limit = '10'
    // initialize searchParam to req.params.search.
        // req.params.search === newInput from SearchGiphs form
    const searchParam = req.params.search

    // axios.get(search endpoint with:
        // ?api_key=${apikey}   
        // &q=${searchParam}
        // &limit=${limit}
    axios.get(`http://api.giphy.com/v1/gifs/search/?api_key=${apiKey}&q=${searchParam}&limit=${limit}`) // NEED "?api_key=XXXXXXXXXXXXXX" after /trending
    .then((response) => {
        // we want to isolate just the urls from the response data
        // response.data === data[]
            // initialize a urlArray variable to response.data.data and map through the array
                // map and return a list of only the urls
        const urlArray = response.data.data.map(url => url.images.original.url)
        // res.send the urlArray
        res.send(urlArray)
    })
    .catch(error => {
        console.log('Error in GET giphy', error)
        res.sendStatus(500)
    })
});

module.exports = router;
