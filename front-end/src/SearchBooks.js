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
      // console.error("Error fetching books", error);
    }
  };

  return (
    <div>
      {/* Input for book search */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books"
      />
      <button onClick={searchBooks}>Search</button>
      {/* Display list of books */}
      <div>
        {books.length > 0 ? (
          books.map((book, index) => (
            <div key={index}>
              <h3>{book.title}</h3>
              <p>Authors: {book.authors && book.authors.length > 0 ? book.authors.join(', ') : "Unknown"}</p>
              <p>ISBN: {book.isbn}</p>
              <p>Key: {book.key}</p>
              {/* Display cover image if cover_i is available */}
              {book.cover_i ? (
             <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`} alt={`Cover of ${book.title}`} />
             ) : (
          <p>No cover image available</p>
        )} 
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