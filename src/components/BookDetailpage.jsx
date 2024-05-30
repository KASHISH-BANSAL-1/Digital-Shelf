import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BookDetail from './BookDetail';

function BookDetailPage() {
  const { id } = useParams(); // Get the book ID from URL parameters
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ensure that the book ID is not undefined
    if (!id) {
      setError('Book ID is undefined');
      return;
    }

    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch book details');
        }
        return response.json();
      })
      .then((data) => {
        setBook(data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {book && <BookDetail book={book} />}
    </div>
  );
}

export default BookDetailPage;
