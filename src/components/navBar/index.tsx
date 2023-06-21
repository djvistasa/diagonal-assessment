/**
 *
 * NavBar
 *
 */

import React from 'react';
import * as assets from '../../assets/images';
import { useAppContext } from '../../context/useAppContext';
import TextField from '../textField';
import {
  StyledNavBar,
  StyledNavBarTitle,
  StyledSearchAction,
  StyledSearchActionIcon,
  StyledSearchWrapper,
} from './styles';
import { INavBarProps } from './types';

function NavBar({ options: { title } }: INavBarProps): JSX.Element {
  const {
    api: { findMoviesByTitle },
    ui: { isSearchActive, toggleSearch },
  } = useAppContext();

  const handleSearch = (text: string) => findMoviesByTitle(text);

  const handleSearchAction = () => {
    findMoviesByTitle('');
    toggleSearch();
  };

  return (
    <StyledNavBar>
      {isSearchActive ? (
        <StyledSearchWrapper>
          <TextField
            onChangeText={handleSearch}
            placeholder="Find movie"
            autoFocus
          />
        </StyledSearchWrapper>
      ) : (
        <StyledNavBarTitle>{title}</StyledNavBarTitle>
      )}
      <StyledSearchAction
        onPress={() => handleSearchAction()}
        testID="search-button"
      >
        <StyledSearchActionIcon
          source={
            assets[
              (!isSearchActive ? 'search' : 'close') as keyof typeof assets
            ]
          }
        />
      </StyledSearchAction>
    </StyledNavBar>
  );
}

export default NavBar;
