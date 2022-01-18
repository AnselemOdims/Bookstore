/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

const Button = ({ type, text, handleClick }) => (
  <button type={type} onClick={handleClick}>{text}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
