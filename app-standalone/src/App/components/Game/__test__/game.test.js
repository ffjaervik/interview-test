import React from "react";
import Game from "../index";
import { shallow } from "enzyme";


describe("Game", () => {

  test("renders without crashing", () => {
    const wrapper = shallow(<Game />);
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });

  test("renders the Score component", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find("Score").length).toBe(1);
  });
  test("renders the Board component", () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find("Board").length).toBe(1);
  });
  });
  