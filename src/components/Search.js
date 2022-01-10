import React, { Component } from 'react'

class Search extends Component {
  state = {
    search: '',
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.searchMovies(this.state.search)
    }
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
                onClick={() => {
                  this.props.searchMovies(this.state.search)
                }}
              >
                SEARCH
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Search
