import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About';


const App = () => {
  return (
    <div className='p'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App