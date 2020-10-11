import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/07-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Test on useReducer", () => {
  test("should return the default state", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });
  test("should add a todo", () => {
    const newTodo = {
      id: 3,
      desc: "Learning Next",
      donde: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });
  test("should toggle the todo", () => {
    const action = {
      type: "toggle",
      payload: 1,
    };
    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
