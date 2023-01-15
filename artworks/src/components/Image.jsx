import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import "./Image.css"

function Art() {

    let { id } = useParams();
  
    const [details, setDetails] = useState(null)
  
    const fetchDetails = () => {
      fetch(
        `https://api.harvardartmuseums.org/IMAGE/${id}?apikey=6ed683b4-8a85-4429-9d57-5d78d8ff8fca`
      )
        .then((res) => res.json())
        .then((data) => {
          setDetails(data);
        });
    };
  
    console.log(details);
  
    useEffect(() => fetchDetails(), []);
  
    return (
      <div className='container'>
       {details && <>
       <div className='card'>
       <p><b>Identifier:</b> {details.id}</p>
       <img src={details.baseimageurl} alt="image" />
       <p><b>Description:</b> {details.description ? details.description : "No description"} </p>
       
       </div>
       </>}
      </div>
  
  
    )
  }
  
  export default Art