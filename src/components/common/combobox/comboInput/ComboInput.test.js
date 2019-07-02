import React from 'react';
import ComboInput from './ComboInput';
import renderer from 'react-test-renderer';

const data = [
  { id: '1', name: 'Candy Eat' },
  { id: '2', name: 'Onions Pick' },
  { id: '3', name: 'Fanny Pick' },
  { id: '4', name: 'Click o Wisp' }
];
const filteredData = [
  { id: '2', name: 'Onions Pick' },
  { id: '3', name: 'Fanny Pick' },
  { id: '4', name: 'Click o Wisp' }
];
const searchValue = 'p';
const selectedOptions = [];

test('Component renders successfully', () => {
  const component = renderer.create(
    <ComboInput
        data={data}
        filteredData={filteredData}
        searchValue={searchValue}
        selectedOptions={selectedOptions}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});