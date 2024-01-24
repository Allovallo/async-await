const BASE_URL = 'http://localhost:4040';

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

addBook({
  title: 'Тестова книга по CSS',
  author: 'grossco',
  genres: ['CSS'],
  rating: 9,
})
  .then(renderBook)
  .catch(error => console.log(error));

// addBook({
//   title: 'Тестова книга по HTML',
//   author: 'grossco',
//   genres: ['HTML'],
//   rating: 7,
// }).then(renderBook);

// function renderBook(book) {
//   console.log('Прийшла відповідь, можна малювати');
//   console.log(book);
// }
