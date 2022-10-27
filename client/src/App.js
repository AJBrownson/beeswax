import React from 'react'
import Navbar from './Layout/Navbar'
import GlobalStyles from './assets/GlobalStyles'
import Routing from './Routes'
import Footer from './Layout/Footer'


function App () {

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App