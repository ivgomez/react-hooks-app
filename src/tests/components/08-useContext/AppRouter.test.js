import "@testing-library/jest-dom";
import { mount } from "enzyme";
import React from "react";
import { AppRouter } from "../../../components/08-useContext/AppRouter";
import { UserContext } from "../../../components/08-useContext/UserContext";

describe("Test on <AppRouter/>", () => {
  const user = {
    id: 1,
    name: "papaleta",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );
  test("should rendered right ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
