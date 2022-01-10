import React from 'react'

function Card(props) {
  const { Title: title, Year: year, ImdbID: id, Poster: poster } = props
  return (
    <div className="row movie">
      <div className="col s12">
        <div className="card" id={id}>
          <div className="card-image">
            <img src={poster} />
            <span className="card-title">{title}</span>
          </div>
          <div className="card-content">
            <p>{year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
