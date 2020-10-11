import React, { useMemo, useState } from "react";
import { heavyProcess } from "../../helpers/heavyProcess";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const memoProcessed = useMemo(() => heavyProcess(counter), [counter]);

  return (
    <div>
      <h1>useMemo</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcessed}</p>
      <button className="btn btn-primary" onClick={increment}>
        +
      </button>

      <button className="btn btn-outline-primary ml-3" onClick={() => setShow(!show)}>
        show/hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
