import React from 'react'
import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Guest from './pages/Guest'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my-portfolio" element={<Portfolio />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/guestbook" element={<Guest />} />
      </Routes>
    </>
  )
}

export default Routing
