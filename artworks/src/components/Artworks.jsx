import React from 'react'
import { useState, useEffect } from 'react';
import Artwork from './Artwork'
import "./Artworks.css"

function Artworks({data}) {
    
    
  return (
    <div className='page'>
        <h1> Images produced by and associated with the Harvard Art Museums.</h1>
    <div className='main-container'>
    <div className='columns'>
        {data.map((dat, id) => <Artwork key={id} name={dat.technique} image={dat.baseimageurl} id={dat.id} />)}
    </div>
    </div>
    </div>
  )
}

export default Artworks