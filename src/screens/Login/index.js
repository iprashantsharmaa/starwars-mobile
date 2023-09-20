import React from 'react';
import { StyleSheet, View } from 'react-native';
import Screen from '../../components/Screen';
import LoginForm from './ components/loginForm';
import { colors, sizes } from '../../utils/constants';
export default function Login({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <LoginForm navigation={navigation} />
      </View>
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
