import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'

function App () {
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
