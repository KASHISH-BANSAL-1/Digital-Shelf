import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/search.css'

function BookCard({ book }) {
  console.log(book)
  const { id, title, authors, imageLinks } = book.volumeInfo;

  return (
    <div className="card">
   
    <img src={imageLinks?.thumbnail} alt={title} className="img" />

    
    <div className="info">
      <NavLink  className="link">
        {title}
      </NavLink>

     
      <NavLink to={`/book/${book.id}`}><button className='but'>View</button></NavLink>
    </div>
  </div>
  );
}

export default BookCard;
