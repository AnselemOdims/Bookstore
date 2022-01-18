import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';

import Button from './Button';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, category, title, author, chapter,
}) => {
  const [percent, setPercent] = useState(10);

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook({ id }));
  };

  const handleClick = () => {
    setPercent((prevState) => (prevState >= 100 ? prevState : prevState + 10));
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#fff',
    }}
    >
      <div>
        <p>{category}</p>
        <h2>{title}</h2>
        <span>{author}</span>
        <div>
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemove}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div style={{ width: '4.25rem', height: '4.25rem' }}>
          <CircularProgressbar value={percent} styles={buildStyles({ pathColor: '#0290ff' })} />
        </div>
        <div>
          <p>
            {percent}
            %
          </p>
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p>CURRENT CHAPTER</p>
        <span>
          Chapter
          {chapter}
        </span>
        <Button type="button" text="UPDATE PROGRESS" handleClick={handleClick} />
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};

export default Book;
