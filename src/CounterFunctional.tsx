import React, { useState } from "react";

const CounterFunctional = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 2)}>+</button>
    </div>
  );
};
export default CounterFunctional;
