import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { displayBooks } from '../redux/books/books';
import Book from './Book';
import Spinner from './Spinner';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector(({ booksReducer }) => booksReducer.books);
  const loading = useSelector(({ loadingReducer }) => loadingReducer.loading);

  const chapter = () => Math.floor(Math.random() * 60);
  useEffect(() => {
    dispatch(displayBooks());
  }, []);

  if (loading) return <Spinner />;
  if (books.length === 0) return <h2>No books Added yet</h2>;

  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} category={book.category} title={book.title} author={book.author} chapter={`${chapter()}`} id={book.id} />
      ))}
    </div>
  );
};

export default BookList;
