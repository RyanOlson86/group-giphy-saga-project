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
  const sqlText = `
  INSERT INTO "favorites"
  ("url")
  VALUES ($1);
  `
  const sqlParams = [req.body.url]

  pool.query(sqlText, sqlParams)

  .then(result => {
    res.sendStatus(201)
  })
  .catch(err => {
    console.log('Error POSTing favorite:', err)
    res.sendStatus(500)
  })
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  const sqlText = `
  UPDATE "favorites" SET category_id = ($2) WHERE "id"=($1);
  `
  const sqlParams = [req.params.id,req.body.category_id]
  console.log("REQ.PARAMS:", req.params)
  pool.query(sqlText, sqlParams)
  .then(result => {
    res.sendStatus(200);
  })
  .catch(err => {
    console.log('Error Updating favorite:', err)
    res.sendStatus(500)
  })
});

// delete a favorite
router.delete('/:id', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
