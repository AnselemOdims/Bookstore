import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 11.5rem;
  height: 2.813rem;
  padding: 0.801rem 1.188rem 0.886rem 1.375rem;
  border-radius: 3px;
  font-family: var(--font-2);
  background: var(--primary-color-1);
  border: none;
  color: var(--white);
  cursor: pointer;

  &:focus {
    background: ${(props) => (props.type === 'button' ? 'var(--primary-color-1)' : 'var(--primary-color-2)')};
  }
`;

const Button = ({ text, handleClick }) => (
  <StyledButton type="button" onClick={handleClick}>{text}</StyledButton>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
