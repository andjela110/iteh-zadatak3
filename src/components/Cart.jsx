import OneBook from "./OneBook";
import React from "react";

const Cart = ({ books }) => {
  return (
    <div>
      <h3 className="caption">Moja korpa:</h3>
      <div className="all-books">
      {books.map((oneBook) => (
        <OneBook book={oneBook} key={oneBook.id} inCart={0} />
      ))}</div></div>
    
  );
};

export default Cart;