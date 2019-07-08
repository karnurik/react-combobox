import React from 'react';
import Combobox from './combobox';
import renderer from 'react-test-renderer';
import {shallow, mount} from 'enzyme';

const data = [
  { id: '1', name: 'Candy Eat' },
  { id: '2', name: 'Onions Pick' },
  { id: '3', name: 'Fanny Pick' },
  { id: '4', name: 'Click o Wisp' }
];
const placeholder = 'Select Games';
const searchPlaceholder = 'Search Games';
const label = 'Games';

test('Combobox component renders correctly', () => {
  const component = renderer.create(
    <Combobox
      data={data}
      placeholder={placeholder}
      searchPlaceholder={searchPlaceholder}
      label={label}
    />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

describe('Combobox suite', () => {

  it('handles outside clicks, check handleClickOutside function', () => {
    const wrapper = shallow(<Combobox />);
    wrapper.find('#outer').simulate('click');
    expect(wrapper.state().searching).toEqual(false)
  });

  it('check handleInputFocus function', () => {
    const wrapper = mount(<Combobox />);
    wrapper.find('.form-input').simulate('focus');
    expect(wrapper.state().searching).toEqual(true);
  });

});


