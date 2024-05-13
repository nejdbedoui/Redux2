import React, { useEffect, useState } from 'react';
import * as service from '../service.js';
import Movie from './movie.jsx';

function Movies() {
    const [movies, setMovies] = useState([])
    const [name, setName] = useState('')
    const [visible, setVisible] = useState(false)
    const fetchmovies = () => {
        service.getAll().then((movie) => {

            setMovies(movie)
        })
    }
    useEffect(() => {
        fetchmovies()
    }, [])

    const getname = (event) => {
        setName(event.target.value)
    }
    onclick = () => {
        service.getAll().then((movie) => {
            setVisible(false)
            if (name == '')
                setMovies(movie)
            else
                setMovies(movie.filter(movie => movie.title == name))
          
        })
    }

    return (
        <>
            <input type="text" value={name} onChange={getname} placeholder='searsh' />
            <button onclick={() => onclick}>Searsh</button>
            <div className="row">
                {movies.length > 0 ? (
                    movies.map((movie, index) => (
                        <div className="col-sm-4" key={index}>
                            <Movie movie={movie} />
                        </div>
                    ))
                ) : (
                    <h1>Not found</h1>
                )}
            </div>
        </>
    );
};


export default Movies;
