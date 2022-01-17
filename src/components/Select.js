const Select = () => {
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
      <select>
        {types.map((type) => (
          <option key={type.id} value={type.val}>{type.val}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
