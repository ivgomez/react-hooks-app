import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "../02-useEffect/effects.css";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />
      {show && (
        <div className="form-group">
          <MultipleCustomHooks />
        </div>
      )}
      <button className="btn btn-primary" onClick={() => setShow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
