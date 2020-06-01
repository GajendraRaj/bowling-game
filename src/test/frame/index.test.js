import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Frame from "../../components/frame";

describe("Frame component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Frame index={1} roll1={1} roll2={5} />);
  });

  it("should display 2 columns in each frame", () => {
    const columns = wrapper.find(".frame").childAt(1).find("span").length;

    expect(columns).toBe(2);
  });

  it("should display props roll1 and roll2 value", () => {
    const roll1 = wrapper.find(".frame span").at(0).text();
    const roll2 = wrapper.find(".frame span").at(1).text();

    expect(roll1).toEqual("1");
    expect(roll2).toEqual("5");
  });

  it("should display X (strike) when roll1 is 10", () => {
    const wrapper = shallow(<Frame index={1} roll1={10} roll2={0} />);
    const roll1 = wrapper.find(".frame span").at(0).text();

    expect(roll1).toEqual("X");
  });

  it("should display empty in roll2 when roll1 is 10", () => {
    const wrapper = shallow(<Frame index={1} roll1={10} roll2={0} />);
    const roll2 = wrapper.find(".frame span").at(1).text();

    expect(roll2).toEqual("");
  });

  it("should display '/' (Spare) in roll2 when roll1 is not 10 but sum of roll1 and roll2 is 10", () => {
    const wrapper = shallow(<Frame index={1} roll1={6} roll2={4} />);
    const roll2 = wrapper.find(".frame span").at(1).text();

    expect(roll2).toEqual("/");
  });

  it("should display roll3 for 10th Frame when previous roll are either Spare or Strike", () => {
    const wrapper = shallow(
      <Frame index={10} roll1={10} roll2={0} roll3={5} />
    );
    const roll3 = wrapper.find(".frame span").at(2).text();

    expect(roll3).toEqual("5");
  });

  it("should throw error message if there are no index prop", () => {
    const errorMsg =
      "Failed prop type: The prop `index` is marked as required in `<<anonymous>>`, but its value is `undefined`.";

    const result = checkPropTypes(
      Frame.propTypes,
      { index: undefined },
      "prop",
      Frame.index
    );

    expect(result).toEqual(errorMsg);
  });

  it("should throw error message if index prop type is not a number", () => {
    const errorMsg =
      "Failed prop type: Invalid prop `index` of type `string` supplied to `<<anonymous>>`, expected `number`.";

    const result = checkPropTypes(
      Frame.propTypes,
      { index: "12" },
      "prop",
      Frame.index
    );

    expect(result).toEqual(errorMsg);
  });
});
