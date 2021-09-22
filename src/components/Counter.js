import React, { useState } from "react";



function Counter(props) {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return props.children({
    count, increment, decrement
  })
}

export default Counter;
