import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home"
import Loading from './loading'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import Tvshow from './Components/Partials/Tvshow'
import People from './Components/People'

const App = () => {
  return (
    <div className=' bg-[#1F1E24] w-screen h-screen flex'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/trending' element={<Trending/>}/>
      <Route path='/popular' element={<Popular/>}/>
      <Route path='/movie' element={<Movie/>}/>
      <Route path='/tvshow' element={<Tvshow/>}/>
      <Route path='/people' element={<People/>}/>
    </Routes>
    </div>
   
  )
}

export default App