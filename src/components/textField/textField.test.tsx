import React from 'react';
import TextField from '.';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

const mockOnChangeText = jest.fn();
describe('Text Field', () => {
  const componentMountedWithTheme = useTestComponentWithTheme();

  const component = componentMountedWithTheme(
    <TextField
      autoFocus={false}
      onChangeText={mockOnChangeText}
      placeholder="Test"
    />,
  );

  it('should render correctly', () => {
    expect(component).toBeTruthy();
  });
});
