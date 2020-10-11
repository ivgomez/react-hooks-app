import "@testing-library/jest-dom";
import React from "react";
import { mount, shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";
import { TodoApp } from "../../../components/07-useReducer/TodoApp";
import { act } from "@testing-library/react";

describe("Test on <TodoApp />", () => {
  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => {});

  test("should rendered ok", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add a TODO", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
    });
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("should to delete a TODO", () => {
    wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
    wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (0)");
  });
});
