import { useSelector } from 'react-redux';

import Book from './Book';

const BookList = () => {
  const books = useSelector(({ booksReducer }) => booksReducer);
  return (
    <div>
      {books.length === 0 ? <h2>No Books Added Yet</h2> : books.map((book) => (
        <Book key={book.id} category="Action" title={book.title} author={book.author} chapter="10" id={book.id} />
      ))}
    </div>
  );
};

export default BookList;
