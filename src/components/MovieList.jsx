import React from "react";
import "./MovieList.css";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="list-container">
          <div className="movie-item">
            <img src={movie.Poster} alt="movie"></img>
            <div className="movie-title">
              <span>{movie.Title}</span>
            </div>
            <div
              className="overlay"
              onClick={() => props.handleFavouritesClick(movie)}
            >
              <FavouriteComponent />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
