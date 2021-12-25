import React, { useEffect, useState } from 'react'
import './App.css'
import MovieList from './components/MovieList'
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  const getMovieRequest = async (searchValue) => {
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=bde8058f`

    const response = await fetch(url);
    const responseJson = await response.json(); //It will convert http req to json.

    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  };
  // Always get Called in the first render
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <>
      <div className="navBar">
        <MovieListHeading heading='Search Your Favourite Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='container'>
        <MovieList movies={movies} />
      </div>
    </>
  )
}

export default App
