import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import Screen from '../../components/Screen';
import LoginForm from './ components/loginForm';
import { colors, sizes } from '../../utils/constants';
import { IS_IOS } from '../../utils/helper';
export default function Login({ navigation }) {
  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : 'height'}
        style={styles.container}>
        <LoginForm navigation={navigation} />
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: sizes.heading,
    backgroundColor: colors.backgroundLight,
  },
});
