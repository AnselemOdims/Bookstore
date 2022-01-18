import PropTypes from 'prop-types';

const Button = ({ text, handleClick }) => (
  <button type="button" onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
