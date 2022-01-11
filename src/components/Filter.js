import React, { Component } from 'react'

class Filter extends Component {
  render() {
    return (
      <form action="#" className="filterWrapper">
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="all"
              onChange={(event) => this.props.onFilter(event)}
              checked={this.props.type === 'all'}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="movie"
              onChange={(event) => this.props.onFilter(event)}
              checked={this.props.type === 'movie'}
            />
            <span>Movies</span>
          </label>
        </p>
        <p>
          <label>
            <input
              name="group1"
              type="radio"
              data-type="series"
              onChange={(event) => this.props.onFilter(event)}
              checked={this.props.type === 'series'}
            />
            <span>Series</span>
          </label>
        </p>
      </form>
    )
  }
}

export default Filter
