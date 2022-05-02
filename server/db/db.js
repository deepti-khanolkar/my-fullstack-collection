const connection = require('./connection')

function getBooks (db = connection) {
  return db('books').select()
}

module.exports = {
  getBooks
}
