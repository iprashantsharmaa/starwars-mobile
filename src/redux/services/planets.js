import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const planetsApi = createApi({
  reducerPath: 'planets',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: build => ({
    getPlanets: build.query({
      query: (page = 1) => `planets/?page=${page}`,
    }),
  }),
});

export const { useGetPlanetsQuery } = planetsApi;
