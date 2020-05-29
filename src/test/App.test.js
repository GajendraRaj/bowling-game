import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import Frame from "../components/frame";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("should render title correctly", () => {
    expect(wrapper.find("header").text()).toEqual("Bowling Game");
  });

  it("should display 10 frames in a table structure", () => {
    expect(wrapper.find(Frame).length).toBe(10);
  });

  it("should render Start button", () => {
    expect(wrapper.find("button").text()).toEqual("Start");
  });
});
