import request from 'superagent'

const baseUrl = '/api/v1/books'

export function getBooks () {
  return request.get(baseUrl)
    .then(response => {
      return response.body.entries
    })
    .catch(logError)
}

function logError (err) {
  console.error(
    'Error consuming the API:',
    err.message
  )
}
