import React from 'react';
import ComboOptions from './ComboOptions';
import renderer from 'react-test-renderer';


const elem = { id: '1', name: 'Candy Eat' };
const selectedOptions = [1,3];

test('Component renders successfully', () => {
  const component = renderer.create(
    <ComboOptions
        elem={elem}
        selectedOptions={selectedOptions}
    />
  );
  expect(component.toJSON()).toMatchSnapshot();
});