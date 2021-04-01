import React from "react";
import { shallow } from "enzyme";

import Form from "../containers/Form/Form";

describe('Testing Form component', () => {
    test('test3', () => {
      const wrapper = shallow(<Form />);
      expect(wrapper.instance()).toBeDefined();
    }) 
  })