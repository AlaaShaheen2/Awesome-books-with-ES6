/* eslint-disable max-classes-per-file */
import BooksDetials from './modules/books.js';
import DomBooks from './modules/Dom.js';
import Storage from './modules/localStorage.js';
import Time from './modules/time.js';

const form = document.querySelector('.added');
const listLink = document.querySelector('.list');
const addLink = document.querySelector('.add');
const contLink = document.querySelector('.cont');
const booksSec = document.querySelector('.books-sec');
const addBook = document.querySelector('.add-books');
const contactUs = document.querySelector('.contact-us');

Time.displayTime();

listLink.addEventListener('click', () => {
  booksSec.classList.remove('hide');
  addBook.classList.add('hide');
  contactUs.classList.add('hide');
});

addLink.addEventListener('click', () => {
  booksSec.classList.add('hide');
  addBook.classList.remove('hide');
  contactUs.classList.add('hide');
});
contLink.addEventListener('click', () => {
  booksSec.classList.add('hide');
  addBook.classList.remove('hide');
  contactUs.classList.add('hide');
});

document.addEventListener('DOMContentLoaded', DomBooks.showInDom);

form.addEventListener('submit', (el) => {
  el.preventDefault();

  const bookname = document.getElementById('bookname').value;
  const author = document.getElementById('author').value;

  const book = new BooksDetials(bookname, author);

  DomBooks.domBooksList(book);

  Storage.addToStor(book);

  DomBooks.newFiled();
});

document.querySelector('#tbody').addEventListener('click', (e) => {
  DomBooks.deleteBook(e.target);

  Storage.removeFromStor(
    e.target.parentElement.previousElementSibling.textContent,
  );
});
