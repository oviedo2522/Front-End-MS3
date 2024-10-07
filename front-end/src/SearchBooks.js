import React, { useState } from 'react';

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/search/${query}`); // Fixed here

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const saveBook = async (book) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/books`, { 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book), // Send the entire book object
      });

      if (!response.ok) {
        throw new Error('Failed to save the book');
      }

      const savedBook = await response.json();
      console.log('Book saved:', savedBook);
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', // Ensures the background covers the whole page
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Milestone Library</h1>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books"
        />
        <button onClick={searchBooks}>Search</button>

        <div>
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index}>
                <h3 onClick={() => saveBook(book)} style={{ cursor: 'pointer', color: 'blue' }}>
                  {book.title}
                </h3>
                <p>ISBN: {book.isbn}</p>
                <p>Key: {book.key}</p>
                <p>Authors: {book.authors ? book.authors.join(', ') : 'Unknown'}</p>
                {book.cover_i && (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} // Fixed here
                    alt={`Cover of ${book.title}`} // Fixed here
                  />
                )}
                <button onClick={() => saveBook(book)}>Save for Later</button>
              </div>
            ))
          ) : (
            <p>No books found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBooks;
