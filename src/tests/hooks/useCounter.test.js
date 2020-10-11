import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("test on useCounter", () => {
  test("it should return default values", () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });
  test("it should return the value of 100", () => {
    const { result } = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });
  test("it should increment the counter to +1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;
    act(() => {
      increment();
    });
    const { counter } = result.current;
    expect(counter).toBe(101);
  });
  test("it should decrement the counter to -1", () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;
    act(() => {
      decrement();
    });
    const { counter } = result.current;
    expect(counter).toBe(99);
  });
  test("it should be reset the counter to 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { reset, decrement } = result.current;
    act(() => {
      decrement();
      reset();
    });
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
});
