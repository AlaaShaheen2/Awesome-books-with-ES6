import Storage from './localStorage.js';

class DomBooks {
  static showInDom() {
    const books = Storage.booksFromStorage();

    books.forEach((newbook) => DomBooks.domBooksList(newbook));
  }

  static domBooksList(newbook) {
    const tbody = document.getElementById('#tbody');
    const tRow = document.createElement('tr');

    tRow.innerHTML = `
    <td>${newbook.author}</td>
    <td>by</td>
    <td>${newbook.title}</td>
    <td><a href="#" class='RemoveBtn'>Remove</a></td>
    `;
    tbody.appendChild(tRow);
  }

  static removeBook(element) {
    if (element.classList.contains('RemoveBtn')) {
      element.parentElement.parentElement.remove();
    }
  }

  static newFiled() {
    document.querySelector('.bookname').value = '';
    document.querySelector('.authname').value = '';
  }
}

export default DomBooks;
