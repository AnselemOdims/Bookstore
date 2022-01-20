import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  width: 11.5rem;
  height: ${(props) => (props.update === 'update' ? '2.063rem' : '2.813rem')};
  padding: ${(props) => (props.update === 'update' ? '0.438rem 1.188rem 0.5rem 1.375rem' : '0.801rem 1.188rem 0.886rem 1.375rem')};
  border-radius: 3px;
  font-family: var(--font-2);
  background: ${({ theme }) => theme.primary};
  border: none;
  color: var(--white);
  cursor: pointer;
  transition: background 0.40s linear;

  &:focus {
    background: ${(props) => (props.type === 'button' ? 'var(--primary-color-1)' : 'var(--primary-color-2)')};
  }

  @media (max-width: 650px){
    width: ${(props) => (props.update === 'update' ? '8.063rem' : '11.5rem')};
    height: ${(props) => (props.update === 'update' ? '2.813rem' : '2.813rem')};
  }
`;

const Button = ({ text, handleClick, update }) => (
  <StyledButton type="button" onClick={handleClick} update={update}>{text}</StyledButton>
);

Button.defaultProps = {
  update: 'something',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  update: PropTypes.string,
};

export default Button;
