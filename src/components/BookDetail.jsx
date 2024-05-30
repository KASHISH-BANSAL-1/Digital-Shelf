import React from 'react';
import './css/search.css'

function BookDetail({ book }) {
  if (!book || !book.volumeInfo) {
    return <div>No book details available</div>;
  }

  const { volumeInfo } = book;
  const { description, publishedDate, pageCount, categories, averageRating , previewLink} = volumeInfo;

  return (
    <div className="details">
      <p className="desc"> <span className='label'>Description</span>{description || 'No description available'}</p>
      <p className="desc"> <span className='label'>Published Date: </span> {publishedDate || 'Unknown'}</p>
      <p className="desc"> <span className='label'>Page Count:</span> {pageCount || 'Unknown'}</p>
      {categories && (
        <p className="desc"> <span className='label'>Category:</span> {categories.join(', ')}</p>
      )}
      {averageRating && (
        <p className="desc"> <span className='label'>Average Rating:</span> {averageRating}</p>
      )}
       {previewLink && (
        <button> <a className="link me" href={previewLink}>Preview</a></button>
      )}
    </div>
  );
}

export default BookDetail;
