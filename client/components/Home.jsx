import React from 'react'
import { useSelector } from 'react-redux'

function Home () {
  const books = useSelector(state => state.books)
  return (
    <>
      {books.map(book => {
        return (
          <div key={book.id}>
            {book.title}:{book.author}
          </div>
        )
      })}
    </>
  )
}

export default Home
