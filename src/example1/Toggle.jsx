import { useState } from "react";
import "./styles.css";

const Toggle = ({ "aria-label": ariaLabel, className = "", ...rest }) => {
  const [on, setOn] = useState(false);

  const btnClassName = [
    className,
    "toggle-btn",
    on ? "toggle-btn-on" : "toggle-btn-off",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <label aria-label={ariaLabel || "Toggle"} style={{ display: "block" }}>
      <input
        className="toggle-input"
        type="checkbox"
        checked={on}
        onChange={(e) => e.target.checked}
        onClick={(e) => setOn((x) => !x)}
        data-testid="toggle-input"
      />
      <span className={btnClassName} {...rest} />
    </label>
  );
};

export default Toggle;
