import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import Home from './Components/Pages/Home'
import Create from './Components/Pages/Create'
import About from './Components/Pages/About'  
import BlogItem from './Components/Lib/BlogItem'

function App() {
  return (
    <div>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/create' element={<Create/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/blog/:id' element={<BlogItem/>}/>
</Routes>

      
    </div>
  )
}

export default App