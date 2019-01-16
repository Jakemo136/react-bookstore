import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import BookList from './components/BookList'
import Cart from './components/Cart'

const bodyStyle = {
  paddingTop: "75px"
}

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
  //   this.setState({cart: [...this.state.cart, book]})
  // }

  
  handleSearch = (e) => {
    let newState = {...this.state}
    newState.filterString = e.target.value.toLowerCase()
    this.setState({ filterString : newState.filterString})
  }

  addToCart = (bookId) => {
    // let checkItem = this.state.cart.filter(book => book.id === parseInt(bookId))

    // if (checkItem.length === 1) {
    //   let cart = this.state.cart
    //   let cartItem = cart.filter(item => item.book.id === parseInt(bookId))[0]
    //   cartItem.quantity += 1
      
    //   this.setState({...this.state.cart, cartItem})
    // } else {
      let bookToAdd = this.state.books.find(book => book.id === parseInt(bookId))
      console.log(bookToAdd)
      let newItem = {
        id: this.state.cart.length + 1,
        book: bookToAdd,
        quantity: 1
      }

      this.setState({cart: [...this.state.cart, newItem]})  
    // }
    // console.log(this.state.cart)
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
            <Cart />
          </div>  
        </div>   
      </div>
    );
  }
}

export default App;
