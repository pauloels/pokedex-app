import React, { useState, useCallback } from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput, Icon } from './styles';

interface InputProps extends TextInputProps {
  name?: string;
}

const SearchInput: React.FC<InputProps> = ({ value = '', ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused}>
      <Icon
        name="search"
        size={30}
        color={isFocused || isFilled ? '#FF9000' : '#666360'}
      />

      <TextInput
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={value}
        testID="search-input"
        {...rest}
      />
    </Container>
  );
};

export default SearchInput;