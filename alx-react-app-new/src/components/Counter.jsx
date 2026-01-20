import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Current count = {count}</p>
      <button
        style={{ fontWeight: "bold", fontSize: "15px" }}
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        style={{ fontWeight: "bold", fontSize: "15px" }}
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      <button
        style={{ fontWeight: "bold", fontSize: "15px" }}
        onClick={() => setCount(0)}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
