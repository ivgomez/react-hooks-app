import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe("Test on <HookApp>", () => {
  test("it should rendered ok", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
