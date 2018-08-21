import React from 'react';
import { shallow } from 'enzyme';
import Paging from './Paging';
import toJSON from 'enzyme-to-json';

describe('Paging', () => {

  it('renders as designed', () => {
    // shallow render is "visualization of what got render"
    const wrapper = shallow(<Paging onSearch={() => {}}/>);
    // make sure it is still doing the same thing
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});