import PropTypes from 'prop-types';

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
    <div>
      <select value={selectValue} onChange={handleChange}>
        {types.map((type) => (
          <option key={type.id} value={type.val}>{type.val}</option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  selectValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
