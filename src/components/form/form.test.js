import React from 'react';
import Form from './form';
import renderer from 'react-test-renderer';


const options =  [
    { id: '1', name: 'Candy Eat' },
    { id: '2', name: 'Onions Pick' },
    { id: '3', name: 'Fanny Pick' },
    { id: '4', name: 'Click o Wisp' }
];

const userName = 'UjjwalKumar';

test('Component renders successfully', () => {
  const component = renderer.create(
    <Form
      options={options}
      userName={userName}
    />
   );
  
  expect(component.toJSON()).toMatchSnapshot();
});