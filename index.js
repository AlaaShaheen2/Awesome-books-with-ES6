import BooksDetials from './modules/books.js';
import active from './modules/active.js';
import Time from './modules/time.js';

const moreBooks = new BooksDetials();
moreBooks.elementAdd();
const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', () => {
  moreBooks.bookNew();
});
const show = new active();
show.showAllBooks();
const todaystime = new Time();
todaystime.ShowTime();
