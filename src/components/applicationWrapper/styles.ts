import styled from 'styled-components/native';
import { IStyledApplicationWrapperProps } from './types';

const StyledApplicationWrapper = styled.View<IStyledApplicationWrapperProps>`
  flex: 1;
  background-color: ${({
    theme: {
      colors: { background },
    },
  }) => background};
  padding: ${({ hasPadding }) => (hasPadding ? '10px' : 0)};
`;

export { StyledApplicationWrapper };
