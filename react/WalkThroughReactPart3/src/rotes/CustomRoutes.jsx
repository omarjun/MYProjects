import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import ImageDetails from '../components/ImageDetails'
function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='/image/:id' element ={<ImageDetails/>} />
    </Routes>
  )
}

export default CustomRoutes