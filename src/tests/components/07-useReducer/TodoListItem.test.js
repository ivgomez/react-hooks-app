import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoListItem } from "../../../components/07-useReducer/TodoListItem";

describe("Test on <TodoListItem />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      handleToggle={handleToggle}
      handleDelete={handleDelete}
    />
  );
  test("should rendered ok", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should call the handleDelete Method", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(1);
  });
  test("should call the handleToggle Method", () => {
    wrapper.find("p").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });
  test("should display the text ok", () => {
    const p = wrapper.find("p");
    expect(p.text()).toBe(`1. ${demoTodos[0].desc}`);
  });
  test("should have the complete class if it's done", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={demoTodos[0]} />);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
