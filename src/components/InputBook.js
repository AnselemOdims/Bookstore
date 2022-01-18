import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';

import Button from './Button';
import Select from './Select';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleInput = useRef(null);

  const dispatch = useDispatch();

  const submitBook = () => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
    };
    const res = () => title !== '' && author !== '' && dispatch(addBook(newBook));
    res();
    titleInput.current.focus();
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <div>
        <h2>ADD NEW BOOK</h2>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" ref={titleInput} placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <Select />
        <Button text="ADD BOOK" handleClick={submitBook} />
      </div>
    </section>
  );
};

export default InputBook;
