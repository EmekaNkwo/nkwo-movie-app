import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import SearchSection from "./components/SearchSection";
import MovieListHeader from "./components/MovieListHeader";
import Favourites from "./components/Favourites";
import HeroSection from "./components/HeroSection";
import RemoveFavourites from "./components/removeFavourite";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);

  const noMovies = !movies || (movies && movies.length === 0);
 

  const getMovies = (searchValue) => {
    axios.get(`http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`)
      .then((response) => {
        setMovies(response.data.Search);
      });
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouriteList);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div className="App">
      <HeroSection />
      <div className="container">
        <div className="movie-search">
          <SearchSection
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>

        {noMovies && <h2>No Movie Avaliable, Search for a Movie</h2>}
         
         {!noMovies && (
          <div className="movielist-section">
            <div>
              <MovieListHeader
                heading={`Search Results for "${searchValue}"`}
              />
            </div>
            <div className="movie-items">
              <MovieList
                movies={movies}
                favouriteComponent={Favourites}
                handleFavouritesClick={addFavouriteMovie}
              />
            </div>
            <div className="fav-section-header  ">
              <MovieListHeader heading="Favourites" />
            </div>
            <div className="fav-movie-list">
              <MovieList
                movies={favourites}
                handleFavouritesClick={removeFavouriteMovie}
                favouriteComponent={RemoveFavourites}
              />
            </div>
          </div>
        )}
     
        
        
      </div>
    </div>
  );
}

export default App;
