import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import styled from 'styled-components';

import { displayBooks } from '../redux/books/thunks/bookThunks';
import Book from './Book';
import Spinner from './Spinner';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px 0;
  margin-bottom: 2.9rem;
`;

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
    <Container>
      {books.map((book) => (
        <Book key={book.id} category={book.category} title={book.title} author={book.author} chapter={`${chapter()}`} id={book.id} />
      ))}
    </Container>
  );
};

export default BookList;
