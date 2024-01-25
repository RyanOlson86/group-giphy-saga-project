const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const sqlText = `
  SELECT favorites.id, favorites.url, categories.name
  FROM "favorites"
  JOIN categories ON categories.id = favorites.category_id;
  `
  pool.query(sqlText)

  .then(result => {
    res.send(result.rows)
  })
  .catch(err => {
    console.error("Error in GET favorites:", err)
    res.sendStatus(500)
  })
});

// add a new favorite
router.post('/', (req, res) => {
  res.sendStatus(201);
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
