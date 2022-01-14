import React, { useState } from "react";
import OneBook from "./OneBook";


const Books = ({ books, onAdd }) => {
  const [searchValue,setSearchValue]=useState("");
  const [sort, setSort] =
  useState(true);
function sortAsc(){
  
  setSort(true);
}
function sortDesc(){
  
  setSort(false);
}

  return (
    <div>
      <div className="buttons">
    <button className="sortbtn btn" onClick={sortAsc}>Sortiraj rastuće</button>
    <button className="sortbtn btn" onClick={sortDesc}>Sortiraj opadajuće</button></div>
    <div className="all-books">
    {sort === true ? (
          <>
            {books
              .sort((a, b) =>
                a.title < b.title ? -1 : 1)
              .map((oneBook) => (
                <OneBook book={oneBook} key={oneBook.id} onAdd={onAdd} inCart={1}
                />
              ))}
          </>
        ) : (
          <>
            {books
              .sort((a, b) =>a.title < b.title ? 1 : -1)
              .map((oneBook) => (
                <OneBook book={oneBook} key={oneBook.id} onAdd={onAdd} inCart={1}
                />
              ))}
          </>
        )}
      
      
    </div></div>
  );
};

export default Books;