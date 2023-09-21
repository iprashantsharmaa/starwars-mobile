import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import PlanetsList from '../../screens/PlanetsList';
import { useSelector } from 'react-redux';
import { createNavigationContainerRef } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
export const navigationRef = createNavigationContainerRef();
function Roots() {
  const { isAuthenticated, loading } = useSelector(state => state.authenticate);

  useEffect(() => {
    if (navigationRef.isReady() && !isAuthenticated) {
      navigationRef.reset({
        routes: [{ name: 'Login' }],
      });
    } else {
      navigationRef.reset({
        routes: [{ name: 'PlanetsList' }],
      });
    }
  }, [isAuthenticated]);

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator>
      {!isAuthenticated && (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PlanetsList"
            component={PlanetsList}
            options={{
              title: 'Planets List',
            }}
          />
        </>
      )}
      {isAuthenticated && (
        <>
          <Stack.Screen
            name="PlanetsList"
            component={PlanetsList}
            options={{
              title: 'Planets List',
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Roots;
