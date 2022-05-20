import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Home () {
  const books = useSelector(state => state.books)
  console.log(books)
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
