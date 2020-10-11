import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("test on MultipleCustomHooks", () => {
  useCounter.mockReturnValue({
    counter: 10,
    increment: () => {},
  });

  test("it should rendered ok", () => {
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });
  test("it should display the info", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "papaleta",
          quote: "Hello papaleta",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-0").text().trim()).toBe("Hello papaleta");
    expect(wrapper.find("footer").text().trim()).toBe("papaleta");
  });
});
