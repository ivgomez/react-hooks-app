import "@testing-library/jest-dom";
import React from "react";
import { mount } from "enzyme";
import { LoginScreen } from "../../../components/08-useContext/LoginScreen";
import { UserContext } from "../../../components/08-useContext/UserContext";

describe("Test on <LoginScreen/>", () => {
  const setUser = jest.fn();
  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );
  test("should rendered right ", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("should run the setUser with the argument ", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith({ id: 123, name: "papaleta" });
  });
});
