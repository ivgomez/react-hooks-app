import React, { useRef } from "react";
import "../02-useEffect/effects.css";

export const FocusScreen = () => {
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <h1>Focus</h1>
      <hr />
      <div className="form-group">
        <input ref={inputRef} className="form-control" placeholder="Name" />
      </div>
      <div />
      <button className="btn btn-primary" onClick={handleClick}>
        Save
      </button>
    </div>
  );
};
