import "@testing-library/jest-dom";
import React from "react";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoList } from "../../../components/07-useReducer/TodoList";

describe("Test on <TodoList />", () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();
  const wrapper = shallow(
    <TodoList todos={demoTodos} handleToggle={handleToggle} handleDelete={handleDelete} />
  );
  test("should rendered ok", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should have 2 list items", () => {
    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);
    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(expect.any(Function));
  });
});
