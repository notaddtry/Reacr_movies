import React from 'react'
import Card from './Card'

function Cards(props) {
  const { movies } = props

  return (
    <div className="movies">
      {movies.map((movie) => {
        return <Card key={movie.imdbID} {...movie} />
      })}
    </div>
  )
}

export default Cards
