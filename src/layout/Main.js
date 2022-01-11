import React, { Component } from 'react'
import { Preloader } from '../components/Preloader'
import Cards from '../components/Cards'
import Search from '../components/Search'

class Main extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=8e97afae&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  searchMovies = (str, type = 'all') => {
    fetch(
      `http://www.omdbapi.com/?apikey=8e97afae&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ movies: data.Search })
      })
  }

  render() {
    const { movies } = this.state

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Cards movies={this.state.movies} /> : <Preloader />}
      </main>
    )
  }
}

export default Main
