import PropTypes from 'prop-types'
const Filter = ({filter,onChange}) => {
  return (
    <div className="mb-3">
      <input type="text" className="form-control" value={filter} onChange={(e)=>{onChange(e.target.value)}}/>
    </div>
  );
};
Filter.propTypes={
    filter:PropTypes.string,
    onChange:PropTypes.func
}


export default Filter;
