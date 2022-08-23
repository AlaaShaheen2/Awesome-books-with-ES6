class active {
    showAllBooks = () => {
      const booksSec = document.querySelector('.books-sec');
      const newBookSec = document.querySelector('.add-books');
      const contactUsSec = document.querySelector('.contact-us');
      const listUrl = document.querySelector('.list');
      const addUrl = document.querySelector('.add');
      const contUrl = document.querySelector('.cont');

      booksSec.classList.add('active');
      booksSec.classList.remove('hide');

      function showELm(actElem) {
        actElem.classList.toggle('active');
        actElem.classList.remove('hide');
      }

      function deleteClasses(elem1, elem2) {
        elem1.classList.remove('active');
        elem1.classList.add('hide');

        elem2.classList.remove('active');
        elem2.classList.add('hide');
      }

      listUrl.addEventListener('click', () => {
        showELm(booksSec);
        deleteClasses(newBookSec, contactUsSec);
      });

      addUrl.addEventListener('click', () => {
        showELm(newBookSec);
        deleteClasses(booksSec, contactUsSec);
      });

      contUrl.addEventListener('click', () => {
        showELm(contactUsSec);
        deleteClasses(booksSec, newBookSec);
      });
    };
}
export default active;