import React from 'react';
import { Card, Button } from "react-bootstrap"
import "./MovieList.css"


const MovieList = (props) => {
	return (
		<div className="movie-list">
			{props.movies.map((movie, index) => (
                <div className="movie-cards">
                    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" src={movie.posterURL} />
  <Card.Body>
                            <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
    <Button variant="dark">Add to favorites</Button>
  </Card.Body>
</Card>
				</div>
			))}
		</div>
	);
};

export default MovieList;