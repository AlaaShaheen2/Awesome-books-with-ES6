import BooksDetials from './modules/books.js';
import Active from './modules/active.js';
import Time from './modules/time.js';

const MoreBooks = new BooksDetials();
MoreBooks.elementAdd();
const AddBtn = document.querySelector('.add-btn');
AddBtn.addEventListener('click', () => {
  MoreBooks.bookNew();
});
const Show = new Active();
Show.showAllBooks();
const Today = new Time();
Today.ShowTime();
