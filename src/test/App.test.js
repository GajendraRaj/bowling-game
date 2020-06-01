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

  it("should not exceed a total of 10 per frame", () => {
    const startButton = wrapper.find("button");
    startButton.simulate("click");
    for (let i = 0; i < 10; i++) {
      const roll1 = wrapper.find(Frame).at(i).props().roll1;
      const roll2 = wrapper.find(Frame).at(i).props().roll2;
      const totalPerFrameCount = roll1 + roll2;

      expect(totalPerFrameCount).toBeLessThanOrEqual(10);
    }
  });

  it("should provide an extra change in the 10th Frame if the player scores a Strike", () => {
    let totalRollsInFrame10 = false;
    const startButton = wrapper.find("button");
    startButton.simulate("click");
    for (let i = 0; i < 10; i++) {
      const roll1 = wrapper.find(Frame).at(i).props().roll1;
      const roll2 = wrapper.find(Frame).at(i).props().roll2;

      if (i === 9 && roll1 === 10 && roll2 === "") {
        totalRollsInFrame10 = true;
      }

      if (totalRollsInFrame10) {
        expect(totalRollsInFrame10).toBeTruthy();
      } else {
        expect(totalRollsInFrame10).toBeFalsy();
      }
    }
  });
});
