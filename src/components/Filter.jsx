const Filter = ({filter, updateFilter}) => {
  return (
    <div className="mb-3">
      <input type="text" className="form-control" 
        value={filter} onChange={e => updateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
