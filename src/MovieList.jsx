import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [filter, setFilter] = useState("");
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government. In the early 1990s, Jordan Belfort teamed with his partner Donny Azoff and started brokerage firm Stratton Oakmont.",
      posterURL:
        "https://m.media-amazon.com/images/I/51MAuTMt+gL._AC_SY300_SX300_.jpg",
    },
    {
      id: "2",
      title: "Interstellar",
      description:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
      posterURL:
        "https://m.media-amazon.com/images/I/81nSh3pZUDL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ]);
  const [form, setForm] = useState({
    title: "",
    posterURL: "",
    description: "",
    id: "",
  });

  const renderList = () =>
    movies.map((movie) => (
      <div key={movie.id} className="col-md-4">
        <MovieCard
          title={movie.title}
          img={movie.posterURL}
          description={movie.description}
        />
      </div>
    ));

  const handleAdd = () => {
    movies.push(form);
    setForm({
      title: "",
      posterURL: "",
      description: "",
      id: "",
    });
  };

  const handleRemove = (filter) => {
    const newList = movies.filter((movie) => {
      filter = filter.toLowerCase();
      return movie.title.toLowerCase().includes(filter);
    });
    setMovies(newList);
  };

  return (
    <div className="container">
      <div className="row">{renderList()}</div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="my-3">
          <label> id:</label>
          <input
            type="number"
            value={+form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
          />
        </div>
        <div className="my-3">
          <label> Name:</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
        </div>
        <div className="my-3">
          <label> Description:</label>
          <input
            type="text"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
        </div>
        <div className="my-3">
          <label> Poster:</label>
          <input
            type="text"
            value={form.posterURL}
            onChange={(e) => setForm({ ...form, posterURL: e.target.value })}
          />
        </div>
        <button onClick={handleAdd}>Add New Movie</button>
        <br />
        <label>Remove</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            handleRemove(filter);
          }}
        />
        <br />
        {/* <button onChange={() => }>Remove</button> */}
      </form>
    </div>
  );
};

export default MovieList;
