import React, { Component } from 'react'
import Filter from './Filter'

class Search extends Component {
  state = {
    search: '',
    type: 'all',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.props.searchMovies(this.state.search, this.state.type)
    }
  }

  handleFilter = (event) => {
    event.preventDefault()
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type)
      }
    )
  }

  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field">
              <input
                id="search"
                type="search"
                placeholder="Search.."
                value={this.state.search}
                onChange={(e) => {
                  this.setState({ search: e.target.value })
                }}
                onKeyDown={this.handleKey}
              />
              <button
                className="btn"
                onClick={(event) => {
                  event.preventDefault()
                  this.props.searchMovies(this.state.search, this.state.type)
                }}
              >
                SEARCH
              </button>
            </div>
          </div>
        </form>
        <Filter type={this.state.type} onFilter={this.handleFilter} />
      </div>
    )
  }
}

export default Search
