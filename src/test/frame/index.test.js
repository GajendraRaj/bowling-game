import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Frame from "../../components/frame";

describe("Frame component", () => {
  it("should display 2 columns in each frame", () => {
    const wrapper = shallow(<Frame index={1} />);
    const columns = wrapper.find(".frame").childAt(1).find("span").length;

    expect(columns).toBe(2);
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
