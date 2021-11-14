import React, { useState, useEffect } from "react";
import "./App.css";
import MovieList from "./MovieList";



const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Saw",
      description:
        "The film tells a nonlinear narrative, revolving around the mystery of the Jigsaw Killer, who tests his victims' will to live by putting them through deadly 'games' where they must inflict great physical pain upon themselves to survive.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_.jpg",
      rating: "7/10",
    },
    {
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      rating: "9/10",
    },
    {
      title: "The Wolf of Wall Street",
      description:
        "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
      rating: "8.5/10",
    },
  ]);

  return (
    <div className="container-fluid movie-app">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
