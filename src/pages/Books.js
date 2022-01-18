import styled from 'styled-components';

import BookContainer from '../components/BookContainer';
import InputBook from '../components/InputBook';

const BooksContainer = styled.div`
  padding: 1.813rem 6.25rem;
`;

const Books = () => (
  <BooksContainer>
    <BookContainer />
    <InputBook />
  </BooksContainer>
);

export default Books;
