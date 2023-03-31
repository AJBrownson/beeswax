import React from 'react'
import "./App.css"
import Sidebar from './layout/Sidebar'
import Routing from './Routes'

const App = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
          <Routing />
        </div>
      </div>
    </>
  )
}

export default App