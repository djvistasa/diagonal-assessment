import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({
    theme: {
      colors: { background },
    },
  }) => background};
`;

export { StyledSafeArea };
