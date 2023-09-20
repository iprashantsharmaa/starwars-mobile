import { configureStore } from '@reduxjs/toolkit';
import { planetsApi } from './services/planets';
import authenticateUserSlice from './slices/authenticateSlice';

const store = configureStore({
  reducer: {
    [planetsApi.reducerPath]: planetsApi.reducer,
    authenticate: authenticateUserSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(planetsApi.middleware),
});
export default store;
