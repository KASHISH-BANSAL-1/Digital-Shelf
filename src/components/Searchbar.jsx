import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bookcard from './Bookcard';
import './css/search.css'
import book from '../assets/g51faud6.png'

function Searchbar() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const debounce = (func, delay) => {
      let timer;
      return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => func.apply(context, args), delay);
      };
    };

    const searchBooks = async () => {
      try {
        const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        if (Array.isArray(response.data.items)) {
          setBooks(response.data.items);
        } else {
          setBooks([]); 
        }
      } catch (error) {
        console.error('Error searching books:', error);
        setBooks([]);
      }
    };

    
    const delayedSearchBooks = debounce(searchBooks, 400);

    if (query.trim() !== '') {
      delayedSearchBooks();
    } else {
      setBooks([]);
    }
  }, [query]);

  return (
    <>
  
      <div className='container'>
        <input
          type="text"
          placeholder="Enter the book name..."
          className="search"
          value={query}
          onChange={handleChange}
        />
     </div>
     
      <div className="grid-container">
        {books.map((book) => (
          <Bookcard key={book.id} book={book} />
        ))}
      </div>
       
    </>
  );
}

export default Searchbar;
