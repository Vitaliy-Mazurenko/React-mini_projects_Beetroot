import { useState, memo } from "react";
import { generate as id } from "shortid";


const NewItem = ({addItem}) => {
  const [val, setVal] = useState('')

  const handleChange = ({ target }) => {
    setVal(target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    addItem({value:val, id: id(), packed: false})
    setVal('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-10">
          <input className="form-control mb-3" type="text" value={val} 
            onChange={handleChange}
          />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" />
        </div>
      </div>
    </form>
  );
};

export default memo(NewItem);
