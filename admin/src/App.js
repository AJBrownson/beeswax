import React from 'react'
import "./App.css"
import Sidebar from './layout/Sidebar'

const App = () => {
  return (
    <>
      <div className="App">
        <div className="AppGlass">
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default App