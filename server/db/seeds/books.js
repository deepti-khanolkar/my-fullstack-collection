exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return knex('books').insert([
        { id: 1, title: 'Ready Player One', author: 'Ernest Cline' },
        { id: 2, title: 'Throwing Rocks at the Google Bus', author: 'Douglas Rushkoff' }
      ])
    })
}
