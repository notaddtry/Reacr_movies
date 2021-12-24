import React, { Component } from 'react'

import Cards from '../components/Cards'

class Main extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=8e97afae&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies } = this.state

    return (
      <main className="container content">
        {movies.length ? (
          <Cards movies={this.state.movies} />
        ) : (
          <p>Loading...</p>
        )}
      </main>
    )
  }
}

export default Main
