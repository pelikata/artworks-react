import React from 'react'
import image from "../img/museum.jpg";
import "./About.css"

function About() {
  return (
    <div className='about'>
        <div className='text'>
            <h2>About the Museum</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam voluptates, obcaecati tenetur mollitia expedita quibusdam reiciendis sapiente numquam debitis ipsum perspiciatis unde nihil porro explicabo, nobis id hic doloribus.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit distinctio consequuntur soluta, possimus eius autem iure necessitatibus explicabo itaque laboriosam veniam quaerat ex omnis quam earum dolores eos ipsum consectetur?</p></div>
        
        <img src={image} alt="museum" />
    </div>
  )
}

export default About