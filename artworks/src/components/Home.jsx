import React from 'react'
import "./Home.css"
import arrow from '../img/arrow.png'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className='home'>
      <div className='heading'> <h1>Welcome to the Art Museum's photograph collection</h1> <Link to="/collection"><div><p>Watch collection
       <img src={arrow} alt="arrow"></img></p></div></Link></div>
        <div className='textbox'>
        <div className='column'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, et at ex enim nemo aliquid minima labore doloribus aliquam veniam? Reiciendis, consectetur dolorem excepturi iste sunt optio facilis velit eligendi?
        Temporibus assumenda est quidem voluptatem? Facilis maxime optio, odio quia deserunt alias veritatis excepturi sint voluptate a illo accusantium dolorem magnam? Atque cupiditate ea ipsa doloremque illo tenetur voluptatibus expedita?
        Velit dolores ipsum ex id atque quisquam incidunt reiciendis nam, sit eligendi animi, veritatis cupiditate natus error quia distinctio, vitae quidem! Magnam blanditiis cum atque sunt! Amet sequi suscipit nulla!</p></div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, et at ex enim nemo aliquid minima labore doloribus aliquam veniam? Reiciendis, consectetur dolorem excepturi iste sunt optio facilis velit eligendi?
        Temporibus assumenda est quidem voluptatem? Facilis maxime optio, odio quia deserunt alias veritatis excepturi sint voluptate a illo accusantium dolorem magnam? Atque cupiditate ea ipsa doloremque illo tenetur voluptatibus expedita?
        Velit dolores ipsum ex id atque quisquam incidunt reiciendis nam, sit eligendi animi, veritatis cupiditate natus error quia distinctio, vitae quidem! Magnam blanditiis cum atque sunt! Amet sequi suscipit nulla!</p></div>
        </div>
        
    </div>
  )
}

export default Home