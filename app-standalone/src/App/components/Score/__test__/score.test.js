import React from "react";
import { shallow } from "enzyme";
import Score from "../index";

describe("Score", () => {
  it("renders the props.value passed in ", () => {
    const wrapper = shallow(
        <Score
        playersNames={{ player1: "Player 1", player2: "Player 2" }}
        handleIconsChange={() => {}}
        handleNamesChange={() => {}}
        xScore={0}
        oScore={0}
      />
    );
    
    console.log(wrapper.debug());
    expect(wrapper.find("div").length).toEqual(1);
  });
});
