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

  it("should generate 20 random rolls on start button click", () => {
    const startButton = wrapper.find("button");
    startButton.simulate("click");
    for (let i = 0; i < 10; i++) {
      expect(wrapper.find(Frame).at(i).props().roll1).toBeLessThanOrEqual(10);
      expect(wrapper.find(Frame).at(i).props().roll2).toBeLessThanOrEqual(10);
    }
  });
});
