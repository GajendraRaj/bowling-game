import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Score from "../../components/score";

describe("Score component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Score scoreBoard={[]} />);
  });

  it("should calculate the total score as 0, when all the rolls are 0", () => {
    const score = wrapper.find(".total span").at(1).text();

    expect(score).toBe("0");
  });
});
