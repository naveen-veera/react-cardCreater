import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button/Button";

describe('Testing Button component', () => {
    test('test2', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.instance()).toBeDefined();
    }) 
  })