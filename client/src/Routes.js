import React from 'react'
import Home from './Pages/Home';
import Menu from './Pages/Menu'
import Reservation from './Pages/Reservation'
import NotFound from './Pages/NotFound'
import { Routes, Route } from 'react-router-dom'


const Routing = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/menu' element={ <Menu /> } />
      <Route path='/reservation' element={ <Reservation /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
    </>
  )
}

export default Routing