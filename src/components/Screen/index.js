import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

const IS_IOS = Platform.OS === 'ios';

const STATUS_BAR_HEIGHT = IS_IOS ? 60 : StatusBar.currentHeight;

export default function ({ children, style }) {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={[styles.content, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  statusBar: {
    width: '100%',
    height: STATUS_BAR_HEIGHT,
  },
  strip: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(105, 119, 140, 0.1)',
    paddingVertical: 8,
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: '800',
    fontSize: 12,
    marginLeft: 8,
  },
});
