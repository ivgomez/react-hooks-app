import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css"

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { data } = state;
  const { quote } = !!data && data[0];

  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())    
    console.log('layout:', pTag.current.getBoundingClientRect())
  }, [quote]) 

  useEffect(()=>{
    console.log('useEffect:',pTag.current.getBoundingClientRect())   
  },[quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />
        <blockquote className="blockquote text-right">
          <p ref={pTag} className="mb-0">{quote}</p>
        </blockquote>

        <pre>{JSON.stringify(boxSize, null, 3)}</pre>
  
      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
    </div>
  );
};
