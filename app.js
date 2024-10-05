// Book card constructor

class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }
    toggleReadStatus() {
      this.read = !this.read;
    }
  }
  
  // adding book details to card
  let myLibrary = [];
  
  function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
  }
  
  function displayBooks() {
    let booksContainer = document.querySelector(".bookContainer");
    booksContainer.innerHTML = "";
  
    myLibrary.forEach((book, index) => {
      let bookCard = document.createElement("div");
      bookCard.classList.add("book-card");
      bookCard.setAttribute("data-index", index);
  
      bookCard.innerHTML = `
              <p><strong>Title:</strong> ${book.title}</p>
              <p><strong>Author:</strong> ${book.author}</p>
              <p><strong>Pages:</strong> ${book.pages}</p>
              <p><strong>Read:</strong> ${book.read ? "Yes" : "No"}</p>
              <button class="remove-btn">Remove</button>
              <button class="toggle-read-btn">Read/Unread</button>
          `;
  
      booksContainer.appendChild(bookCard);
    });
  
    // remove button
    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", removeBook);
    });
  
    function removeBook(event) {
      let bookIndex = event.target.parentElement.getAttribute("data-index");
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    }
  
    // read/unread button
    document.querySelectorAll(".toggle-read-btn").forEach((button) => {
      button.addEventListener("click", toggleReadStatus);
    });
  }
  
  function toggleReadStatus(event) {
    let bookIndex = event.target.parentElement.getAttribute("data-index");
    myLibrary[bookIndex].toggleReadStatus();
    displayBooks();
  }
  
  // show form display
  document.getElementById("new-book").addEventListener("click", () => {
    document.getElementById("form-container").classList.toggle("hidden");
  });
  
  // to prevent the default value change
  document.getElementById("book-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
  
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
  
  //   reset button
    document.getElementById("book-form").reset();
    
  //   to hidden the form display again
    document.getElementById("form-container").classList.add("hidden");
  });