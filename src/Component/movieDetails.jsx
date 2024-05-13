import React, { useEffect, useState } from 'react';
import * as service from '../service.js'
import { useParams } from 'react-router-dom';
function MoviesDetails() {

  const [movie,SetMovie]=useState('')
  const {id}=useParams()


  const fetchmovie=()=>{
    service.getAll().then((movie2) => {
      const moviee=movie2.find((movie)=>movie.id=id)
      SetMovie(moviee)
      console.log(movie2.find((movie)=>movie.id=id))
    })
  }


  useEffect(() => {
    fetchmovie()
}, [])


  
  return (
    <div>
          <div className="row">
          <div className="col-sm-4" >
          {movie.img && <img style={{ height: "500", width: "500px" }}   src={movie.img} alt={movie.title} />}
          </div>
          <div className="col-sm-4" >
          <h3 className="card-title">{movie.title}</h3>
          <p className="card-text">{movie.genre}</p>
          <p className="card-text">{movie.year}</p>
          <p className="card-text">{movie.description}</p>
          </div>
          </div>
    </div>
  );
}

export default MoviesDetails;
