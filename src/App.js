import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'

export class App extends Component {
  
  state = {
    filterString: '',
    books: [],
    cart: [] 
  }
  
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const booksJson = await response.json()
    this.setState({books: booksJson})
  }

  
  // async addBookToCart(item) {
  //   const response = await fetch('http://localhost:8082/api/books/cart/add/:id', {
  //     method: 'PATCH',
  //     body: JSON.stringify(item),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   const book = await response.json()
  //   this.setState({books: [...this.state.books, book]})
  // }

  
  handleSearch = (e) => {
    let newState = {...this.state}
    newState.filterString = e.target.value.toLowerCase()
    this.setState({ filterString : newState.filterString})
  }

  render() {
    return (
      <div className="App container-fluid">
        <div>
          <SearchBar handleSearch={this.handleSearch}/>
        </div>
        <div className="row">
          <div className="col-md-8">  
            <BookList books={this.state.books} filterString={this.state.filterString}/>
          </div>
        </div>   
      </div>
    );
  }
}

export default App;
