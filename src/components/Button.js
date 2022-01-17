/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';

const Button = ({ type, text }) => (
  <button type={type}>{text}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
