import "./Item.css";
import PropTypes from "prop-types";
import {memo} from "react";
import  {useRemoveItem,useToggleItem} from "../context/AppContext";

const Item = ({ item }) => {
  const {removeItem}=useRemoveItem();
  const {toggleItem}=useToggleItem();
  return (
    <li className="item-box">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={item.packed}
          onChange={(e) => {toggleItem(item)}}
          id={item.id}
        />
        <label className="form-check-label" htmlFor={item.id}>
          {" "}
          {item.value}
        </label>
      </div>
      <button className="btn btn-secondary btn-sm" onClick={() => {removeItem(item.id)}}>
        Remove
      </button>
    </li>
  );
};
Item.propTypes = {
    item: PropTypes.shape({
        id:PropTypes.string,
        value:PropTypes.string,
        packed:PropTypes.bool
    })
}

export default memo(Item);
