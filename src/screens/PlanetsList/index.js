import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Screen from '../../components/Screen';
import useGetPlanets from '../../hooks/useGetPlanets';
import PlanetCard from './components/PlanetCard';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { buttonVariants, colors, sizes } from '../../utils/constants';
import { LogoutIcon } from '../../assets/icons/logoutIcon';
import LoadingSkeleton from './components/PlanetCard/LoadingSkeleton';
import { logoutUser } from '../../redux/slices/authenticateSlice';

export default function PlanetsList({ navigation }) {
  const listRef = useRef(null);
  const dispatch = useDispatch();
  const [maxPopulation, setMaxPopulation] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { planets, isLoading, hasNext } = useGetPlanets({ page, searchQuery });

  useEffect(() => {
    if (searchQuery && !!planets.length) {
      setMaxPopulation(Number(planets[0]?.population) ?? 0);
      listRef.current.scrollToOffset({ animated: true, y: 0 });
    }
  }, [planets, searchQuery]);

  const onEndReached = () => {
    if (hasNext && !searchQuery) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const logout = async () => {
    dispatch(logoutUser());
  };

  return (
    <Screen style={styles.container}>
      <Input
        style={styles.searchInput}
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search Planets Name"
        id="search"
        type="search"
      />
      {isLoading && <LoadingSkeleton count={4} />}
      {!isLoading && (
        <FlatList
          ref={listRef}
          style={styles.list}
          keyExtractor={(item, index) => `${item.name}${index}`}
          data={planets}
          renderItem={({ item }) => (
            <PlanetCard
              maxPopulation={searchQuery ? maxPopulation : 0}
              planet={item}
            />
          )}
          onEndReached={onEndReached}
        />
      )}
      <Button
        buttonStyle={styles.btn}
        onClick={logout}
        variant={buttonVariants.CONTAINED}>
        <View style={styles.row}>
          <LogoutIcon />
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  searchInput: {
    marginBottom: 10,
  },
  btn: {
    marginTop: 12,
  },
  logoutText: {
    fontFamily: 'Avenir',
    color: colors.white,
    fontWeight: sizes.WEIGHT800,
  },
});
