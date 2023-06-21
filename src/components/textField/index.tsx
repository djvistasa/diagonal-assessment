/**
 *
 * TextField
 *
 */

import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledTextField } from './styles';
import { ITextFieldProps } from './types';

function TextField({
  onChangeText,
  placeholder,
  autoFocus,
}: ITextFieldProps): JSX.Element {
  const {
    colors: { white80 },
  } = useTheme();
  return (
    <StyledTextField
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={white80}
      autoFocus={autoFocus}
    />
  );
}

export default TextField;
