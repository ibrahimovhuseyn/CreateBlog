import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "./assets/css/style.css"
import Home from './Components/Pages/Home'
import Create from './Components/Pages/Create'
import BlogItem from './Components/Lib/BlogItem'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Components/Pages/Users'
import Header from './Components/Header/Header'
import Registration from './Components/Pages/Registration'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/users' element={<Users />} />
        <Route path='/blog/:id' element={<BlogItem />} />
        <Route path='/registration' element={<Registration/>} />
      </Routes>
      <ToastContainer />


    </div>
  )
}

export default App