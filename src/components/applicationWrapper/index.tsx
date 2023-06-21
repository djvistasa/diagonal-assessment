/**
 *
 * ApplicationWrapper
 *
 */

import React from 'react';
import { StyledApplicationWrapper } from './styles';
import { IApplicationWrapperProps } from './types';

function ApplicationWrapper({
  children,
  hasPadding,
}: IApplicationWrapperProps): JSX.Element {
  return (
    <StyledApplicationWrapper hasPadding={hasPadding}>
      {children}
    </StyledApplicationWrapper>
  );
}

export default ApplicationWrapper;
