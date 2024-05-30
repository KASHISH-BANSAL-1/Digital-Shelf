import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import BookDetailPage from './components/BookDetailpage';
import Bookcard from './components/Bookcard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Searchbar />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
        <Route path="/search" element={<Bookcard />} />
      </Routes>
    </div>
  );
}

export default App;
