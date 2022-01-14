import React from "react";
import { BsCartPlus, BsCartX } from "react-icons/bs";


function OneBook({ book, onAdd, inCart }){
    return (
        <div className="card" >
          <img
            className="card-img-top" 
            src={book.img}
          />
          <div className="card-body">
            <h2 className="card-title orange">{book.title}</h2>
            <h4 className="card-text">{book.author}</h4>
            <div>{inCart==1? (
              <p className="card-text">{book.description}</p>
            ):""}</div>
            
            <h4 className="card-text orange">{book.price}</h4>
          </div>
          {inCart === 1 ? (
            <>
              <button
                className="btn"
                onClick={() => onAdd(book.title, book.id)}
              >
                <BsCartPlus />
              </button>
              <button className="btn">
                <BsCartX />
              </button>
            </>
          ) : (
            <h4>Količina: {book.amount}</h4>
          )}
        </div>
      );
}
export default OneBook;