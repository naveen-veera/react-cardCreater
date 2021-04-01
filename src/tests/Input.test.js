import React from "react";
import { shallow } from "enzyme";

import Input from "../components/Input/Input";

describe('Testing Input component', () => {
    test('test4', () => {
      const wrapper = shallow(<Input />);
      expect(wrapper.instance()).toBeDefined();
    }) 
  })