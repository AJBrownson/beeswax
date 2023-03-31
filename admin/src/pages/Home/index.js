import React from 'react'
import HomeForm from "../../components/HomeForm"
import "./styles.css"
import Food from "../../assets/food.jpg"


const Home = () => {
  return (
    <>
      <div className='container'>
        <h1>Available Sections</h1>
        <div className="cards">

          <div className='card'>
            <img src={Food} alt="" />
            <div className='action'>
              <button className='--action'>Edit</button>
              <button className='--action'>Delete</button>
            </div>
          </div>

          <div className='card'>
            <img src={Food} alt="" />
            <div className='action'>
              <button className='--action'>Edit</button>
              <button className='--action'>Delete</button>
            </div>
          </div>

          <div className='card'>
            <img src={Food} alt="" />
            <div className='action'>
              <button className='--action'>Edit</button>
              <button className='--action'>Delete</button>
            </div>
          </div>

          <div className='card'>
            <img src={Food} alt="" />
            <div className='action'>
              <button className='--action'>Edit</button>
              <button className='--action'>Delete</button>
            </div>
          </div>
        </div>
        <div className='create'>
          <h1>Create New Category</h1>
          <HomeForm />
        </div>
      </div>
    </>
  )
}

export default Home