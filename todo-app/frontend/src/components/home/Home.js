import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home d-flex justify-content-center align-items-center'>
        <div className='container text-center  d-flex justify-content-center align-items-center flex-column'>
            <h1>Organize your <br/> work and life, finally</h1>
            <p>Become focused, organized, and calm with 
                <br/> Todoist. Accomplish more, every day.
            </p>
            <button className='home-btn p-2'>Make todo list</button>
        </div>

    </div>
  )
}

export default Home
