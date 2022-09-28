"use strict";

let myLibrary = [];
let bookData = [];

const bookForm = document.getElementById("add-book");

function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

function addBookToLibrary(title, author, pages, read) {
  const aBook = new Book(title, author, pages, read);
  myLibrary.push(aBook);
}

function showBook(bookLibrary) {
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");
  const lastItemMyLibrary = myLibrary[myLibrary.length - 1];
  bookCard.textContent = `Title: ${lastItemMyLibrary.title} | Author: ${
    lastItemMyLibrary.author
  } | Pages: ${lastItemMyLibrary.pages} | ${
    lastItemMyLibrary.read ? "READ" : "NOT READ"
  }`;

  let btn = document.createElement("button");
  btn.innerHTML = "REMOVE";
  bookCard.appendChild(btn);
  btn.addEventListener("click", () => btn.parentElement.remove());
  btn.classList.add("rmv-button");

  document.querySelector(".book-show-panel").appendChild(bookCard);
  changeColor(bookCard);
}

function changeColor(bookCard) {
  if (bookCard.textContent.slice(-14, -11) == "NOT") {
    bookCard.style.backgroundColor = "orange";
  } else {
    bookCard.style.backgroundColor = "green";
  }
}

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(bookForm);
  for (const value of data) {
    bookData.push(value[1]);
  }
  addBookToLibrary(...bookData);
  bookData = [];
  showBook();
});
