import React from 'react';

const SearchBar = (props) => {

  return(
    <header>
      <nav className="navbar fixed-top navbar-dark bg-info">
        <a className="navbar-brand" href="/">Books, Books, Books!</a>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onKeyUp={props.handleSearch} />
        </form>
      </nav>
    </header>
  )
}

export default SearchBar