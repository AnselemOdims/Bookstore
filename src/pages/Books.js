import styled from 'styled-components';

import BookContainer from '../components/BookContainer';
import InputBook from '../components/InputBook';

const BooksContainer = styled.div`
  padding: 1.813rem 6.25rem 16.563rem;
  
  @media (max-width: 992px){
    padding: 2rem;
  }

  @media (max-width: 768px){
    padding: 1rem;
  }
`;

const Books = () => (
  <BooksContainer>
    <BookContainer />
    <hr />
    <InputBook />
  </BooksContainer>
);

export default Books;
