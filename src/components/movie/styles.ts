import { Image } from '@rneui/themed';
import styled from 'styled-components/native';

const StyledMovie = styled.View``;

const StyledMovieImage = styled(Image)`
  width: ${({
    theme: {
      dimensions: { screenWidth },
    },
  }) => `${(screenWidth - 40) / 3}px`};

  height: ${({
    theme: {
      dimensions: { screenWidth },
    },
  }) => `${(screenWidth - 40) / 3 + 90}px`};
`;

const StyledMovieName = styled.Text`
  color: ${({
    theme: {
      colors: { white },
    },
  }) => white};
  font-family: ${({
    theme: {
      fonts: { titilliumRegular },
    },
  }) => titilliumRegular};
`;

export { StyledMovie, StyledMovieImage, StyledMovieName };
