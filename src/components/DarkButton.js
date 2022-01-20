import Switch from 'react-switch';
import { func, string } from 'prop-types';

const DarkButton = ({ theme, toggleTheme }) => {
  const setMode = theme === 'light';

  return (
    <Switch checked={setMode} onChange={toggleTheme} onColor="#0169B9" />
  );
};

DarkButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default DarkButton;
