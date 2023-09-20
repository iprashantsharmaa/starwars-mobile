import React, { useMemo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import { colors, sizes } from '../../../../utils/constants';

function PlanetCard({ planet, maxPopulation }) {
  const { name, population, createdAt, climate, gravity, diameter } =
    planet || {};

  const barWidth = useMemo(() => {
    return (
      (maxPopulation && population >= 0
        ? Number(population) / maxPopulation
        : 0) * 100
    );
  }, [maxPopulation, population]);

  return (
    <View style={styles.card}>
      <View style={[styles.row, styles.gap_15]}>
        <View style={styles.flex_1}>
          <Text style={styles.text}>{name}</Text>
          <View style={styles.row_between}>
            <View style={[styles.row, styles.alignItems_center, styles.mt_6]}>
              <Text style={styles.label}>Population : </Text>
              <Text style={[styles.smallText]}>
                {population >= 0 ? Number(population).toLocaleString() : 0}
              </Text>
            </View>
            <View style={[styles.row, styles.alignItems_center, styles.mt_6]}>
              <Text style={styles.label}>Climate : </Text>
              <Text style={[styles.smallText]}>{climate?.toUpperCase()}</Text>
            </View>
          </View>
          <View style={styles.row_between}>
            <View style={[styles.row, styles.alignItems_center, styles.mt_6]}>
              <Text style={styles.label}>Gravity : </Text>
              <Text style={[styles.smallText]}>{gravity}</Text>
            </View>
            <View style={[styles.row, styles.alignItems_center, styles.mt_6]}>
              <Text style={styles.label}>Diameter : </Text>
              <Text style={[styles.smallText]}>
                {Number(diameter).toLocaleString()}
              </Text>
            </View>
          </View>
          <Text style={[styles.date, styles.mt_6]}>
            {dayjs(createdAt).format('DD/MM/YY hh:mm a')}
          </Text>
        </View>
      </View>
      {!!maxPopulation && (
        <View style={[styles.barContainer, styles.mt_6]}>
          <View style={[styles.populationBar, { width: `${barWidth}%` }]} />
        </View>
      )}
    </View>
  );
}

export default React.memo(PlanetCard);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.borderMedium,
    marginVertical: 8,
    paddingBottom: sizes.small,
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
  alignItems_center: {
    alignItems: 'center',
  },
  row_between: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex_1: {
    flex: 1,
  },
  gap_15: {
    gap: 15,
  },
  gap_5: {
    gap: 5,
  },
  text: {
    fontFamily: 'Avenir',
    fontWeight: sizes.WEIGHT800,
    fontSize: sizes.heading,
    color: colors.accent,
  },
  label: {
    fontFamily: 'Avenir',
    fontWeight: sizes.WEIGHT800,
    fontSize: sizes.normal,
    color: colors.accent,
  },
  smallText: {
    fontFamily: 'Avenir',
    fontWeight: sizes.WEIGHT500,
    fontSize: sizes.normal,
    color: colors.accentIntermediate,
  },
  date: {
    fontFamily: 'Avenir',
    fontWeight: sizes.WEIGHT400,
    fontSize: sizes.normal,
    textAlign: 'right',
    color: colors.accentIntermediate,
  },
  mt_6: {
    marginTop: sizes.xSmall,
  },
  barContainer: {
    height: sizes.xSmall,
    flex: 1,
    backgroundColor: colors.backgroundMedium,
    borderRadius: 6,
    overflow: 'hidden',
  },
  populationBar: {
    height: '100%',
    backgroundColor: colors.accent,
  },
});
