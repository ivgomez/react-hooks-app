import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: null, loading: true, error: null });
  //console.log(isMounted);
  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState((prevState) => ({ ...prevState, loading: true }));
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          } else {
            //console.log("state wont change");
          }
        }, 1000);
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "the info could not be loaded",
        });
      });
  }, [url]);
  return state;
};
