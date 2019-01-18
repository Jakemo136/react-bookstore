import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import Cart from './components/Cart'

const bodyStyle = {
  paddingTop: "75px"
}

const API = 'http://localhost:8082/api'

class App extends Component {
  
  state = {
    filterString: '',
    books: [],
    cart: [] 
  }
  
  async componentDidMount() {
    const response = await fetch(`${API}/books`)
    const booksJson = await response.json()
    this.setState({books: booksJson})
    
    const cartState = this.state.books.filter(book => book.inCart === true)
    console.log(cartState)
    this.setState(this.state.cart = cartState)
  }
        
  addToCart = async (bookId) => {
    let bookToAdd = this.state.books.find(book => book.id === parseInt(bookId))

    await fetch(`${API}/books/cart/add/${bookToAdd.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })
    
    this.setState({cart: [...this.state.cart, bookToAdd]})
    console.log(this.state.cart)
  }
    
  handleSearch = (e) => {
    let newState = {...this.state}
    newState.filterString = e.target.value.toLowerCase()
    
    this.setState({ filterString : newState.filterString})
  }
  
  total = () => {
    let result = this.state.cart.reduce((result, book) => {
      return Number(result) + Number(book.price)
    }, 0)
    return result
  }
  
  removeBook = async (bookId) => {
    let newCart = this.state.cart.filter(book => (book.id !== bookId))
    
    await fetch(`${API}/books/cart/remove/${bookId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    })

    this.setState(this.state.cart = newCart)
  }
  
  render() {
    return (
      <div className="App container-fluid">
        <div>
          <SearchBar handleSearch={this.handleSearch}/>
        </div>
        <div className="row" style={bodyStyle}>
          <div className="col-md-8">  
            <BookList books={this.state.books} filterString={this.state.filterString} addToCart={this.addToCart}/>
          </div>
          <div className="col-md-4 border">
            <Cart cart={this.state.cart} total={this.total} removeBook={this.removeBook}/>
          </div>  
        </div>   
      </div>
    )
  }
}

export default App;
