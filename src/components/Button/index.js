import React from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { buttonVariants, colors, sizes } from '../../utils/constants';

function Button({
  onClick,
  variant = buttonVariants.CONTAINED,
  color = colors.primary,
  buttonStyle = {},
  disabled = false,
  loading = false,
  children,
}) {
  const btnClasses = {
    text: styles.text,
    outlined: styles.outlined,
    contained: styles.contained,
  };
  return (
    <TouchableOpacity
      style={[
        styles.button,
        btnClasses[variant],
        variant === buttonVariants.CONTAINED && { backgroundColor: color },
        variant === buttonVariants.OUTLINED && { borderColor: color },
        disabled ? styles.disabled : styles.enabled,
        buttonStyle,
      ]}
      onPress={onClick}
      disabled={disabled}>
      {loading && <ActivityIndicator size="small" color={colors.background} />}
      {!loading && children}
    </TouchableOpacity>
  );
}
export default Button;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: sizes.xxSmall,
    padding: sizes.small,
  },
  contained: {
    backgroundColor: colors.primary,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.primary,
  },
  text: {
    borderWidth: 0,
    flex: 0,
    padding: 0,
  },
  disabled: {
    backgroundColor: colors.accentLight,
  },
  iconWrap: {
    marginRight: 10,
  },
});
