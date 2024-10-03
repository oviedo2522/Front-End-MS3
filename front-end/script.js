// async function loadBooks(filterCategory = 'all') {
//     const response = await fetch('/api/books'); // Fetch books from back-end
//     const books = await response.json();
//     const bookList = document.getElementById("book-list");
//     bookList.innerHTML = ''; // Clear current book list

//     // Loop through books and create HTML for each one
//     books.forEach(book => {
//         if (filterCategory === 'all' || book.category === filterCategory) {
//             const bookElement = document.createElement("div");
//             bookElement.classList.add("book");

//             bookElement.innerHTML = `
//                 <img src="${book.image}" alt="${book.title} Cover">
//                 <h3>${book.title}</h3>
//                 <p>Author: ${book.author}</p>
//                 <p>Price: ${book.price}</p>
//                 <button onclick="addToCart('${book.title}')">Add to Cart</button>
//             `;

//             bookList.appendChild(bookElement);
//         }
//     });
// }

// // Function to filter books based on selected category
// function filterBooks() {
//     const category = document.getElementById("category").value;
//     loadBooks(category);
// }

// // Function to handle adding books to the cart
// function addToCart(bookTitle) {
//     alert(`"${bookTitle}" has been added to your cart!`);
// }

// // Load all books when the page loads
// window.onload = () => {
//     loadBooks();
// };
