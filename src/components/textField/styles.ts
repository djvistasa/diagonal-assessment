import styled from 'styled-components/native';

const StyledTextField = styled.TextInput`
  height: 44px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  font-size: 15px;
`;

export { StyledTextField };
