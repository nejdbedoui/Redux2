import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as service from '../service.js'
import { addto } from '../store/wishlist.js';
import { useDispatch } from 'react-redux';
function Movie({movie}) {
  const dispatch=useDispatch()
  const [rating,setRating]=useState()
  const [visible,setVisible]=useState(false)
  const add=()=>{
    if(rating>0 && rating<=5){
      if(movie.rating==null){
        movie.rating=0
      }
      movie.rating=movie.rating+rating/5
      service.addPlayerToEvent(movie)
    }
  else
  alert('Please enter a rating between 1 and 5')
  }

  const change=(event)=>{
    setRating(event.target.value)
  }

  const add2=async ()=>{
    setVisible(await dispatch(addto(movie)))
    setTimeout(()=>{
      setVisible(false)
    },3000)
  }

  return (
    <>
    {visible? <h1>added</h1> : null}
 
      <div className="card">
      {movie.img && <img src={movie.img} alt={movie.title} />}
      <div className="card-body">
        <h3 className="card-title"><Link to={`/details/${movie.id}`}>{movie.title}</Link></h3>
        <p className="card-text">{movie.genre}</p>
        <p>rating : {movie.rating ? movie.rating : <p>no Rating yet</p>}</p>
         rating <input value={rating} onChange={change} type="number" min={1} max={5}/>
        <button onClick={()=>add()}>add rating</button>
        <button onClick={()=>add2()}>add to wishlist</button>
      </div>
    </div>
    </>
  );
}

export default Movie;
