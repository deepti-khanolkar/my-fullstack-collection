import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Layout from './Layout'
import Home from './Home'
import { fetchBooks } from '../actions'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          {/* <Route path=":aspect" element={<Aspect />} />
          <Route path="userprofile" element={<UserProfile />} /> */}
        </Route>
      </Routes>
    </>
  // <section className="main">
  //   {/* add your code here */}
  // </section>
  )
}

export default App
