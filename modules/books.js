const bookList = document.querySelector('.info');
const bookName = document.querySelector('.title');
const authorName = document.querySelector('.author');

class BooksDetials {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.newbooks =[];
    if (localStorage.newbooks){
      this.newbooks= JSON.parse(localStorage.getItem('newbooks'))
    }
  }

  elementAdd(){
    let elms='';
    for (let i = 0; i < this.newbooks.length; i += 1) {
      const itm = `
          <ul class="books-element">
          <li>${this.newbooks[i].title} by ${this.newbooks[i].author} </li>
          <button type="button" data-index = "${i}" class="remove"  onclick="removeBooks(event)">remove</button>
          </ul>
          `;

      elms += itm;
    }
    bookList.innerHTML = elms;
  }

  bookNew() {
    const book = new BooksDetials(bookName.value, authorName.value);
    this.newbooks.push(book);
    this.elementAdd();
    localStorage.setItem('newbooks', JSON.stringify(this.newbooks));
    bookName.value = '';
    authorName.value = '';
  }
  static Delete (event) {
    const itemind = event.currentTarget.dataset.index;
    this.newbooks.splice(parseInt(itemind, 5), 1);
    this.elementAdd();
    localStorage.setItem('books', JSON.stringify(this.newbooks));
  }
}
export default BooksDetials;

