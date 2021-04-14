import React, { useContext } from "react";
import { CounterContext } from "./CounterContext";

const Display = () => {
  const { state } = useContext(CounterContext);
  return <h1>{state}</h1>;
};

export default Display;
