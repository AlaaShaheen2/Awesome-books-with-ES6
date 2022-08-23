class Storage {
  static booksFromStorage() {
    let booksNew;
    if (localStorage.getItem('booksNew') === null) {
      booksNew = [];
    } else {
      booksNew = JSON.parse(localStorage.getItem('bbooksNew'));
    }
    return booksNew;
  }

  static addToStor(newbook) {
    const booksNew = Storage.booksFromStorage();

    booksNew.push(newbook);

    localStorage.setItem('booksNew', JSON.stringify(booksNew));
  }

  static removeFromStor(bookname) {
    const booksNew = Storage.booksFromStorage();

    booksNew.forEach((newbook, i) => {
      if (newbook.bookname === bookname) {
        booksNew.splice(i, 1);
      }
    });

    localStorage.setItem('booksNew', JSON.stringify(booksNew));
  }
}

export default Storage;
