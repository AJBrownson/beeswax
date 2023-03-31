import React from 'react'
import HomeForm from "../../components/HomeForm"

const Home = () => {
  return (
    <>
      <div className='container'>
        <div className='create'>
          <h1>Create New Category</h1>
          <HomeForm />
        </div>
      </div>
    </>
  )
}

export default Home