const express = require('express')
const db = require('../db/db')
const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  db.getBooks()
    .then(entries => {
      res.json({ entries })
      return null
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})
