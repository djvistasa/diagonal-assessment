import React from 'react';
import ApplicationWrapper from '.';
import useTestComponentWithTheme from '../../hooks/useTestComponentWithTheme';

describe('Application wrapper', () => {
  const componentWithTheme = useTestComponentWithTheme();

  it('should render with padding', () => {
    const tree = componentWithTheme(
      <ApplicationWrapper hasPadding>
        <></>
      </ApplicationWrapper>,
    );
    tree;
  });
  it('should render without padding', () => {
    const tree = componentWithTheme(
      <ApplicationWrapper hasPadding={false}>
        <></>
      </ApplicationWrapper>,
    );
    tree;
  });
});
