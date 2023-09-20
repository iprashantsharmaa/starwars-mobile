import { useEffect, useMemo, useState } from 'react';
import { useGetPlanetsQuery } from '../redux/services/planets';
export default function useGetPlanets({ page = 1, searchQuery }) {
  const [planets, setPlanets] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const { data, isLoading } = useGetPlanetsQuery(page);

  const hasNext = useMemo(() => !!data?.next, [data]);

  useEffect(() => {
    if (page > 1) {
      setPlanets(prevState => [...prevState, ...data?.results]);
    } else {
      setPlanets(data?.results);
    }
  }, [data, page]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredPlanets(
        planets
          .filter(planet =>
            planet.name.toLowerCase().includes(searchQuery.toLowerCase()),
          )
          .sort((a, b) => b.population - a.population),
      );
    } else {
      setFilteredPlanets(planets);
    }
  }, [planets, searchQuery]);

  return {
    planets: filteredPlanets,
    isLoading,
    hasNext,
  };
}
