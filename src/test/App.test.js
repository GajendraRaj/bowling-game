import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render title correctly", () => {
    expect(wrapper.find("header").text()).toEqual("Bowling Game");
  });
});
