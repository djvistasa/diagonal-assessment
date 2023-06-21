import styled from 'styled-components/native';

const StyledNavBar = styled.View`
  height: 65px;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  flex-direction: row;
`;

const StyledNavBarTitle = styled.Text`
  font-family: ${({
    theme: {
      fonts: { titilliumBold },
    },
  }) => titilliumBold};
  font-size: 22px;
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
`;

const StyledSearchAction = styled.TouchableOpacity``;

const StyledSearchActionIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const StyledSearchWrapper = styled.View`
  width: 80%;
`;

export {
  StyledNavBar,
  StyledNavBarTitle,
  StyledSearchAction,
  StyledSearchActionIcon,
  StyledSearchWrapper,
};
