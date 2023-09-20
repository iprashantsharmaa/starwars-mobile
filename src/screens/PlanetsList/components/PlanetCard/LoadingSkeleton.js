import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors, sizes } from '../../../../utils/constants';

function LoadingSkeleton({ count = 1 }) {
  return (
    <>
      {new Array(count).fill(null).map((__, index) => (
        <View key={index} style={styles.container}>
          <View style={[styles.row, styles.gap_12]}>
            <View style={[styles.description, styles.gap_8]}>
              <View style={[styles.name, styles.bg_secondary]} />
              <View style={styles.row_between}>
                <View style={[styles.detail, styles.bg_secondary]} />
                <View style={[styles.detail, styles.bg_secondary]} />
              </View>
              <View style={styles.row_between}>
                <View style={[styles.detail, styles.bg_secondary]} />
                <View style={[styles.detail, styles.bg_secondary]} />
              </View>
              <View style={[styles.row_end]}>
                <View style={[styles.dateTime, styles.bg_secondary]} />
              </View>
            </View>
          </View>
        </View>
      ))}
    </>
  );
}

export default LoadingSkeleton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderMedium,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    padding: sizes.small,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  name: {
    height: 30,
    width: '50%',
    borderRadius: 6,
  },
  detail: {
    height: 20,
    width: '40%',
    borderRadius: 6,
  },
  description: {
    flex: 1,
  },
  mt_12: {
    marginTop: 12,
  },
  row_between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  row_end: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  dateTime: {
    height: 20,
    width: '30%',
    borderRadius: 6,
  },
  gap_8: {
    gap: 12,
  },
  gap_12: {
    gap: 12,
  },
  bg_secondary: {
    backgroundColor: '#e1dfdf',
  },
});
