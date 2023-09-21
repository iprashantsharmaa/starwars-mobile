// Core Packages
import React, { forwardRef, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Custom Components
import { colors, sizes } from '../../utils/constants';
import Label from '../Label';
import { HidePasswordIcon, ShowPasswordIcon } from '../../assets';
import { SearchIcon } from '../../assets/icons/searchIcon';
import { IS_IOS } from '../../utils/helper';

function Input(
  {
    label,
    style,
    id,
    labelStyle,
    inputStyle,
    textInputStyles,
    onChange,
    placeholder,
    type,
    value = '',
    disabled = false,
    required = false,
    error = false,
    textContentType = 'none',
    secureTextEntry = false,
  },
  ref,
) {
  const [secureEntry, setSecureEntry] = useState(secureTextEntry);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    setSecureEntry(secureTextEntry);
  }, [secureTextEntry]);

  const onValueChange = val => {
    if (onChange) {
      onChange(val);
    }
  };

  const togglePasswordView = () => {
    setSecureEntry(prevState => !prevState);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <View style={[styles.container, style]}>
      {label && (
        <Label
          label={label}
          style={styles.label}
          labelStyle={labelStyle}
          required={required}
          labelFontWeight={sizes.WEIGHT800}
        />
      )}
      <View
        style={[
          styles.inputContainer,
          { paddingVertical: IS_IOS ? sizes.small : 0 },
        ]}>
        <TextInput
          ref={ref}
          id={id}
          disabled={disabled}
          style={[
            error && styles.error,
            focused && !error && styles.focused,
            styles.input,
            inputStyle,
          ]}
          secureTextEntry={secureEntry}
          textStyle={[styles.textField, textInputStyles]}
          onChangeText={onValueChange}
          placeholder={placeholder}
          placeholderTextColor={colors.accentLight}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
          autoCorrect={false}
          autoCapitalize="none"
        />
        {type === 'password' && (
          <TouchableOpacity onPress={togglePasswordView}>
            {secureEntry ? <HidePasswordIcon /> : <ShowPasswordIcon />}
          </TouchableOpacity>
        )}
        {type === 'search' && <SearchIcon />}
      </View>
    </View>
  );
}

export default forwardRef(Input);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderMedium,
    borderWidth: 1,
    paddingHorizontal: sizes.xSmall,
    borderRadius: sizes.xxSmall,
  },
  input: {
    flex: 1,
  },
  textField: {
    fontFamily: 'Avenir',
    color: colors.accent,
    fontSize: sizes.medium,
  },
  label: {
    marginBottom: sizes.xSmall,
  },
  focused: {
    borderColor: colors.primary,
  },
  error: {
    borderColor: colors.danger,
  },
});
