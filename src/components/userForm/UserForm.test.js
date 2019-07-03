import React from 'react';
import UserForm from './userForm';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';


const options =  [
    { id: '1', name: 'Candy Eat' },
    { id: '2', name: 'Onions Pick' },
    { id: '3', name: 'Fanny Pick' },
    { id: '4', name: 'Click o Wisp' }
];

const userName = 'UjjwalKumar';

test('Component renders successfully', () => {
  const component = renderer.create(
    <UserForm
      options={options}
      userName={userName}
    />
   );
  
  expect(component.toJSON()).toMatchSnapshot();
});

describe('Form suite', () => {

  it('handles input change', () => {
    const wrapper = shallow(<UserForm />);
    wrapper.find('input').first().simulate('change', { target: { value: 'Hello' } });
    expect(wrapper.state().userName).toEqual('Hello')
  })
});