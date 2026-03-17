import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './assets/Components/Navbar/Navbar'
import Home from './pages/Home/Home'

const App = () => {
  return (
   <div>
     <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
     </Routes>
   </div>
  )
}

export default App