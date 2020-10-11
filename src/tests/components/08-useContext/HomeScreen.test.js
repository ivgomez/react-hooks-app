import "@testing-library/jest-dom";
import { mount } from "enzyme";
import React from "react";
import { HomeScreen } from "../../../components/08-useContext/HomeScreen";
import { UserContext } from "../../../components/08-useContext/UserContext";

describe("Test on <HomeScreen/>", () => {
  const user = {
    name: "papaleta",
    email: "pp@mail.com",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );
  test("should rendered right ", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
