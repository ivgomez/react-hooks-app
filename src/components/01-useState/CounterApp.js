import React, { useState } from "react";
import "./counter.css";

export const CounterApp = () => {
  const [{ counter1, counter2 }, setCounter] = useState({ counter1: 10, counter2: 20 });

  return (
    <>
      {/* <h1>Counter {counter}</h1> */}
      <h1>Counter {counter1}</h1>
      <h1>Counter {counter2}</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setCounter({ counter2, counter1: counter1 + 1 })}
      >
        +1
      </button>
    </>
  );
};
