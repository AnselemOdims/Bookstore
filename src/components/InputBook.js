import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Select from './Select';
import { addBookAPI } from '../redux/books/thunks/bookThunks';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2.9rem;

  > div:first-of-type {
    > h2 {
      font-size: 1.17rem;
      color: #888888;
      @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 30%;
      height: 2.813rem;
      border: solid 1px #e8e8e8;
      padding: 0 20px;
      font-size: 1rem; 
      font-family: var(--font-1);
      background:${({ theme }) => theme.input};
      transition: background 0.40s linear;

      &::placeholder {
        font-size: 0.8rem;
        font-family: var(--font-1);
        color: ${({ theme }) => theme.holder};
        transition: color 0.40s linear;
      }

      &:focus {
        outline: solid 1px var(--primary-color-1);
      }
    }

    @media (max-width: 992px){
      > input {
        width: 27%;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;

      > input {
        width: 100%;
        margin-bottom: 1rem;
      }
    }
  }
`;

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const titleInput = useRef(null);

  const dispatch = useDispatch();

  const submitBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    const res = () => title !== '' && author !== '' && dispatch(addBookAPI(newBook));
    res();
    titleInput.current.focus();
    setTitle('');
    setAuthor('');
  };

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Container>
      <div>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div>
        <input type="text" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Select handleChange={handleChange} selectValue={category} />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </Container>
  );
};

export default InputBook;
