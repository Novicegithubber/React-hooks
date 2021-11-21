import React from "react";

const MovieCard = ({ description, title, img }) => {
  return (
    <>
      <h6>{title}</h6>
      <div>
        <img src={img} alt="poster" />
      </div>
      <p>{description}</p>
    </>
  );
};

export default MovieCard;