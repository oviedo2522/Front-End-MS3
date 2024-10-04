import React, { useState } from 'react';

const SearchBooks = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const searchBooks = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/search/${query}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  // Function to save the selected book to the database
  const saveBook = async (book) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/books`, {
        method: 'POST',
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
      // Optionally, you can give feedback to the user or update UI
    } catch (error) {
      console.error('Error saving book:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      {/*!search button */}
      <button onClick={searchBooks}>Search</button>

      {/* Display list of books */}
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
             {/* open library link for images */}
              {book.cover_i && (
                 
                 <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={`Cover of ${book.title}`} />
              )}
             {/* Add the Save for Later button */}
             <button onClick={() => saveBook(book)}>Save for Later</button>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};


export default SearchBooks;
