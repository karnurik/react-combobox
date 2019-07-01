import React from 'react';
import Combobox from './combobox';
import renderer from 'react-test-renderer';

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
