import React from 'react'


const BookListItem = (props) => {
  return (
    <div className="list-group-item" key={props.id}>
      <div className="row">
        <div className="col-md-10 font-weight-bold">{props.title}: {props.subtitle}</div>
        <div className="col-md-2">${props.price.toFixed(2)}</div>
      </div>
      <div className="row">
        <div className="col-md-12 font-italic">{props.author}</div>
      </div>
      <div className="row">
        <div className="col-md-10">{props.description}</div>
        <span className="span-2">
          <button className="btn btn-dark" type="button" onClick={(e) => props.addToCart(props.id)}>Do Want</button>
        </span> 
      </div>
    </div>
  )
}

export default BookListItem