import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, sizes } from '../../utils/constants';

function Label({
  label,
  labelStyle = {},
  style,
  required = false,
  labelFontWeight = sizes.WEIGHT500,
}) {
  return (
    <View style={[styles.container, style]}>
      <Text
        style={[styles.labelText, { fontWeight: labelFontWeight }, labelStyle]}>
        {label}
      </Text>
      {required && <Text style={styles.sup}>*</Text>}
    </View>
  );
}
export default Label;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  labelText: {
    fontFamily: 'Avenir',
    fontSize: sizes.normal,
    color: colors.accent,
    fontWeight: sizes.WEIGHT500,
  },
  sup: {
    color: colors.danger,
    marginLeft: 4,
    fontSize: sizes.small,
  },
});
