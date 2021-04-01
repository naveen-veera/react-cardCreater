import { shallow } from "enzyme";
import React from "react";
import Card from "../components/Card/Card";

describe('Testing Card component', () => {
    test('test5', () => {
      const wrapper = shallow(<Card />);
      expect(wrapper.instance()).toBeDefined();
    });
})