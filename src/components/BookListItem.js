import React from 'react'


const BookListItem = ({title, subtitle, author, description, price}) => {
  return (
    <div className="list-group-item" >
      <div className="row">
        <div className="col-md-10 font-weight-bold">{title}: {subtitle}</div>
        <div className="col-md-2">${price.toFixed(2)}</div>
      </div>
      <div className="row">
        <div className="col-md-12 font-italic">{author}</div>
      </div>
      <div className="row">
        <div className="col-md-10">{description}</div>
        <span className="span-2">
          <button className="btn btn-dark" type="button">Do Want</button>
        </span> 
      </div>
    </div>
  )
}

export default BookListItem