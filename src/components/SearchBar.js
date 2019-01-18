import React from 'react';

const SearchBar = (props) => {

  return(
    <header>
      <nav className="navbar fixed-top navbar-dark bg-info">
        <a className="navbar-brand" href="/">BookCart ShoppingShelf!</a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.handleSearch} />
        </form>
      </nav>
    </header>
  )
}

export default SearchBar