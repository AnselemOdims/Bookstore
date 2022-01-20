import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectContainer = styled.div`
    > select {
      appearance: none;
      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0;
      width: 20.813rem;
      height: 2.813rem;
      font-family: inherit;
      outline: none;
      color: ${({ theme }) => theme.holder};
      cursor: pointer;
      padding: 0 0 0 20px;
      transition: color 0.40s linear;
    } 

    & {
        width: 15%;
        border: solid 1px var(--neutral-color-1);
        border-radius: 4px;
        background:${({ theme }) => theme.input};
        height: 2.813rem;
        cursor: pointer;
        line-height: 1.1;
        display: flex;
        align-items: center;
        margin: 20px 0;
        padding-right: 20px; 
        transition: background 0.40s linear; 
        @media (max-width: 768px){
          width: 50%;
        }
      }

      &::after {
        content: "";
        width: 0.8rem;
        height: 0.5rem;
        background-color: #c7c7c7;;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      }

      &:focus-within {
        border: solid 1px var(--primary-color-1);
      }
`;
const Select = ({ selectValue, handleChange }) => {
  const types = [
    {
      id: 1,
      val: 'Category',
    },
    {
      id: 2,
      val: 'Action',
    },
    {
      id: 3,
      val: 'Science Fiction',
    },
    {
      id: 4,
      val: 'Economy',
    },
    {
      id: 5,
      val: 'Comedy',
    },
  ];
  return (
    <SelectContainer>
      <select value={selectValue} onChange={handleChange}>
        {types.map((type) => (
          <option key={type.id} value={type.val}>{type.val}</option>
        ))}
      </select>
    </SelectContainer>
  );
};

Select.propTypes = {
  selectValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
