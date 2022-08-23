import BooksDetials from './modules/books.js';
import active from './modules/active.js';
import Time from './modules/time.js';

const moreBooks = new BooksDetials();
moreBooks.elementAdd();
const AddBtn = document.querySelector('.add-btn');
AddBtn.addEventListener('click', () => {
  moreBooks.bookNew();
});
const Show = new active();
Show.showAllBooks();
const todaystime = new Time();
todaystime.ShowTime();
