import { render } from '@testing-library/react-native';
import React from 'react';
import NavBar from '.';

test('does component render', () => {
  const tree = render(<NavBar />);
  tree;
});
