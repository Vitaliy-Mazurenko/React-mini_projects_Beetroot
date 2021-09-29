import {useState} from "react";
import { generate as id } from "shortid";
import {useAddItem} from "../context/AppContext";

const NewItem = () => {
  const [value,setValue]=useState('');
  const {addItem}=useAddItem();
  const handleChange = ({ target }) => {
    const {value}=target;
    setValue(value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(value.length<1) return ;
    addItem({value: value, id: id(), packed: false})
    setValue('')
  };

  return (
    <form>
      <div className="row">
        <div className="col-md-10">
          <input className="form-control mb-3" type="text" value={value} onChange={(e)=>handleChange(e)} />
        </div>
        <div className="col-md-2">
          <input className="btn btn-success" type="submit" value="Add item" onClick={(e)=>{handleSubmit(e)}} />
        </div>
      </div>
    </form>
  );
};


export default NewItem;
