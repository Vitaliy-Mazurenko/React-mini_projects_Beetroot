/** @jsxImportSource @emotion/react */
import { jsx } from "@emotion/react";

const Form = () => {
  return (
    <form className="row g-3">
      <div className="col-md-3">
        <label>Title</label>
        <input className="form-control" name="title" />
      </div>
      <div className="col-md-1">
        <label>Price</label>
        <input className="form-control" name="price" />
      </div>
      <div className="col-md-2  align-self-end">
        <button className="btn btn-primary">Add product</button>
      </div>
    </form>
  );
};

export default Form;
