import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../components/04-useRef/RealExampleRef";

describe("test on <RealExample>", () => {
  const wrapper = shallow(<RealExampleRef />);
  test("it should rendered ok", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(false);
  });
  test("it should rendered the component <MultipleCustomHooks />", () => {
    wrapper.find("button").simulate("click");
    expect(wrapper.find("MultipleCustomHooks").exists()).toBe(true);
  });
});
