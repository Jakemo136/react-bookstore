import React from 'react'
import BookListItem from './BookListItem'

const BookList = ({books, filterString, addToCart}) => {

  const filterBooks = books.filter(book => book.title.toLowerCase().includes(filterString) || book.author.toLowerCase().includes(filterString) || book.subtitle.toLowerCase().includes(filterString))

  return (
    <ul className="list-group">
      <div>
      {filterBooks.map((book) => <BookListItem 
        key={book.id}
        title={book.title}
        subtitle={book.subtitle}
        author={book.author}
        description={book.description}
        price={book.price}
        addToCart={addToCart}
        id={book.id}
      />)}
      </div>
    </ul>
  )
}

export default BookList