import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/07-useReducer/TodoAdd";

describe("Test on <TodoList />", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
  test("should rendered ok", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should not call the submint method", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    //console.log(formSubmit);
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });
  test("should call the handleAddTodo method", () => {
    const value = "Learning react";
    //wrapper.find("input").simulate("change", { target: { value, name: "description" } });
    wrapper.find("input").prop("onChange")({ target: { value, name: "description" } });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
