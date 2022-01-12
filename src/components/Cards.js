import React from 'react'
import Card from './Card'

function Cards(props) {
  const { movies = [] } = props

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Card key={movie.imdbID} {...movie} />)
      ) : (
        <h3>Not found</h3>
      )}
    </div>
  )
}

export default Cards
