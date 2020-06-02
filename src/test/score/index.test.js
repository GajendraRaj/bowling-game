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

  it("should calculate the total score as 20 when all the rolls are 1", () => {
    const wrapper = shallow(
      <Score
        scoreBoard={[
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ]}
      />
    );
    let score = wrapper.find(".total span").at(1).text();
    expect(score).toBe("20");
  });

  it("should calculate the total score as 29 when the first two rolls are 5 and other rolls are 1", () => {
    const wrapper = shallow(
      <Score
        scoreBoard={[
          5,
          5,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
        ]}
      />
    );
    let score = wrapper.find(".total span").at(1).text();
    expect(score).toBe("29");
  });
});
