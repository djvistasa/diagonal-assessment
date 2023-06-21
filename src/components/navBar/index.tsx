/**
 *
 * NavBar
 *
 */

import React, { useState } from 'react';
import * as assets from '../../assets/images';
import { useAppContext } from '../../context';
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
  const { findMoviesByTitle } = useAppContext();

  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearch = (text: string) => findMoviesByTitle(text);

  const toggleSearch = () => setIsSearchActive(!isSearchActive);

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

      <StyledSearchAction onPress={() => toggleSearch()}>
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
