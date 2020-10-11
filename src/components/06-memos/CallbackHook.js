import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";
import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>useCallback</h1>
      <h3>counter: {counter}</h3>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
