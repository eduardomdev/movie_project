import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Sections/Home'
import NowPlaying from './components/Sections/NowPlaying'
import Popular from './components/Sections/Popular'
import TopRated from './components/Sections/TopRated'
import Upcoming from './components/Sections/Upcoming'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import InfoFilm from './components/Routes/InfoFilm'
import SearchFilm from './components/Routes/SearchFilm'
import React from "react"

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/nowplaying' element={<NowPlaying />}/>
        <Route path='/upcoming' element={<Upcoming />}/>
        <Route path='/toprated' element={<TopRated/>}/>
        <Route path='/description' element={<InfoFilm/>}/>
        <Route path='/search' element={<SearchFilm/> }/>
      </Routes>
      <Footer></Footer>
    </Router>
  )
}

export default App
