import React from 'react'
import Navbar from './Layout/Navbar'
import GlobalStyles from './assets/GlobalStyles'
import Routing from './Routes'
import Footer from './Layout/Footer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'


function App () {

  return (
    <>
      <ShoppingCartProvider>
      <GlobalStyles />
      <Navbar />
      <Routing />
      <Footer />
      </ShoppingCartProvider>
    </>
  )
}

export default App