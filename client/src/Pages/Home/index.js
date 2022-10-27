import React from 'react'
import Hero from './homeComponents/Hero'
import Menu from './homeComponents/Menu'
import CTA from './homeComponents/CTA'
import Delivery from './homeComponents/Delivery'
import Testimonials from './homeComponents/Testimonials'


const Home = () => {
  return (
    <>
    <Hero />
    <Menu />
    <CTA />
    <Delivery />
    <Testimonials />
    </>
  )
}

export default Home