import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { displayBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(({ booksReducer }) => booksReducer);

  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  return (
    <div>
      {books.length === 0 ? <h2>No Books Added Yet</h2> : books.map((book) => (
        <Book key={book.id} category={book.category} title={book.title} author={book.author} chapter="10" id={book.id} />
      ))}
    </div>
  );
};

export default BookList;
