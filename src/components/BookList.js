import React from 'react'
import BookListItem from './BookListItem'

// filterString = props.filterString.toLowerCase()
// filterObj = props.bookList.filter(book.title.toLowerCase().includes(filterString))
//use a .reduce() and a .filter() 
// !props.filterString ? show bookList : show filteredObj



const BookList = ({books, filterString}) => {

  const filterBooks = books.filter(book => book.title.toLowerCase().includes(filterString))

console.log(filterString)
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
      />)}
      </div>
    </ul>
  )
}

export default BookList