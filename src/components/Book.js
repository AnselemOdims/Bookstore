import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Button from './Button';
import { removeBookAPI } from '../redux/books/books';

const slideIn = keyframes`
0% {
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}

100% {
  -webkit-transform: scale(1);
  transform: scale(1);
}
`;

const Container = styled.div`
  animation: ${slideIn} 0.8s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  display: flex;  
  justify-content: space-between;
  background: #fff;
  padding: 2rem 9.188rem 1.625rem 1.688rem;
  border: solid 1px #e8e8e8;
  border-radius: 4px;

  > .chapter {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  > .progress {
    display: flex;
    align-items: center;
  }
`;

const Book = ({
  id, category, title, author, chapter,
}) => {
  const [percent, setPercent] = useState(Math.floor(Math.random() * 99));

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBookAPI(id));
  };

  const handleClick = () => {
    setPercent((prevState) => (prevState >= 100 ? prevState : prevState + 10));
  };

  return (
    <Container>
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
        <Button text="UPDATE PROGRESS" handleClick={handleClick} />
      </div>
    </Container>
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
