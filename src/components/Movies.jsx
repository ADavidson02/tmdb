import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { getMovieData } from "./utilities/apiCalls";

class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount = async () => {
    this.setState({ movies: await getMovieData() });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="card-deck">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            data={movie}
            getMovieDetails={this.props.getMovieDetails}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
