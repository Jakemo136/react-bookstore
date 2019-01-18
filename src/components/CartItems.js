import React from 'react'

const CartItems = (props) => {
console.log('price/qty ',props.price,props.qty)
    return (
      <div>
        <li className="list-group-item">        
          <div className="row">
            <div className="col-md-8">{props.title}</div>
            <div className="col-md-4">
              <button 
                className="btn btn-danger" 
                type="button" 
                onClick={(e) => props.removeBook(props.bookId)
              }>oops no</button>
            </div>
          </div>  
          <div className="row">
            <div className="col-md-6">{props.author}</div>
            <div className="col-md-2">${props.price}
            </div>
          </div>
        </li> 
      </div>
    )
}

export default CartItems