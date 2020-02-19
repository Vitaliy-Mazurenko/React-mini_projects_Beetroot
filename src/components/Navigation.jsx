import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="mb-3">
      <NavLink exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink to="/toggle">Example 1</NavLink>
      {" | "}
      <NavLink to="/shoplist">Example 2</NavLink>
      {" | "}
      <NavLink to="/cart">Example 3</NavLink>
    </div>
  );
};

export default Navigation;
