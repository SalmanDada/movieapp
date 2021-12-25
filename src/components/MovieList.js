import React from 'react'
import '../App.css'

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie) => (
                <div className='movieImg'>
                    <img src={movie.Poster} alt="movie" />
                </div>
            ))}
        </>
    )
}

export default MovieList;
