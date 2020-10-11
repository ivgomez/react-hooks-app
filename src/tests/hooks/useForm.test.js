import "@testing-library/jest-dom";
import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("test on useForm", () => {
  const initialForm = {
    name: "papaleta",
    email: "pp@pp.com",
  };
  test("it should return default form values ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("it should change the form value for the name field ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "benzon",
        },
      });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "benzon" });
  });
  test("it should restore de form from the reset() ", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({
        target: {
          name: "name",
          value: "benzon",
        },
      });
      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
