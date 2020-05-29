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

  it("should display 10 frames in a table structure", () => {
    expect(wrapper.find(".scoreBoard .frame").length).toBe(10);
  });
});
