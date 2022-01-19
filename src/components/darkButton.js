import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Toggle = styled.button`
  width: 20px;
  height: 20px;
`;

const DarkButton = () => {
  const [dark, setDark] = useState('false');

  useEffect(() => {
    const res = localStorage.getItem('dark');
    if (!res) {
      localStorage.setItem('dark', 'false');
    } else {
      localStorage.setItem('dark', dark);
    }
  }, [dark]);

  useEffect(() => {
    const res = localStorage.getItem('dark');
    setDark(res);
  }, []);

  const handleToggle = () => {
    if (dark === 'false') {
      setDark('true');
    } else {
      setDark('false');
    }
  };

  return (
    <Toggle onClick={handleToggle} style={{ background: dark === 'true' ? 'red' : 'blue' }} />
  );
};

export default DarkButton;
