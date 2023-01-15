import React from 'react'
import "./Artwork.css"
import { Link } from 'react-router-dom';

function Artwork({name, image, id}) {
  return (
    <div className='artwork'><div><h2>{name}</h2>
    <Link to={`/image/${id}`}><img src={image} alt="kep" /></Link></div></div>
  )
}

export default Artwork