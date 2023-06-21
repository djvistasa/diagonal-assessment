import { render } from '@testing-library/react-native';
import React from 'react';
import Movies from '.';

test('does component render', () => {
  const tree = render(<Movies />);
  tree;
});
