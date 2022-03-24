import React from "react";

const MovieListHeader = (props) => {
  return (
    <div className="movie-header" style={{ margin: "1rem 0" }}>
      <h1 style={{ fontSize: "1.5rem" }}>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeader;
