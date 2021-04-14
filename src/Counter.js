import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Counter = () => {
  const { dispatch } = useContext(CounterContext);
  return (
    <div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Counter;
