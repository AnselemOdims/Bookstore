import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import styled from 'styled-components';

import Button from './Button';
import Select from './Select';
import { addBookAPI } from '../redux/books/books';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1.813rem;

  > div:first-of-type {
    > h2 {
      font-size: 1.17rem;
      color: #888888;
    }
  }

  > div:last-of-type {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > input {
      width: 18rem;
      height: 2.813rem;
      border: solid 1px #e8e8e8;
      padding: 0 20px; 

      &::placeholder {
        font-size: 0.8rem;
        font-family: 'Montserrat';
        color: #c4c4c4;
      }

      &:focus {
        outline solid 1px var(--primary-color-1);
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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Select handleChange={handleChange} selectValue={category} />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </Container>
  );
};

export default InputBook;
