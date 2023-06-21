import { render } from '@testing-library/react-native';
import React from 'react';
import TextField from '.';

test('does component render', () => {
  const tree = render(<TextField />);
  tree;
});
