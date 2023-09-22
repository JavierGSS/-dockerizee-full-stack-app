import "./books.js";

window.addEventListener("load", () => {
  createBookList();
});

async function createBookList() {
  const response = await fetch("./books.json");
  const json = await response.json();
  const books = document.getElementById("books");

  json.books.forEach((book) => {
    const element = document.createElement("mit-book");
    element.book = book;
    books.appendChild(element);
  });
}

window.addEventListener("load", () => {
  crearListaLibros();
});

async function crearListaLibros() {
  const response = await fetch("./books.json");
  const json = await response.json();
  const lista = document.getElementById("list");

  json.books.forEach((book) => {
    const elemento = document.createElement("list-book");
    elemento.list = book;
    lista.appendChild(elemento);
  });
}
