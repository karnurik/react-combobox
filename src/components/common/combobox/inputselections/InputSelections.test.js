import React from 'react';
import InputSelections from './InputSelections';
import renderer from 'react-test-renderer';


const data = [
  { id: '1', name: 'Candy Eat' },
  { id: '2', name: 'Onions Pick' },
  { id: '3', name: 'Fanny Pick' },
  { id: '4', name: 'Click o Wisp'}
];

const slectedElements = ['Candy Eat', 'Onions Pick'];
const placeholder = 'Select Games';

test('Component renders successfully', () => {
  const component = renderer.create(
    <InputSelections
        data={data}
        slectedElements={slectedElements}
        placeholder = {placeholder}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});