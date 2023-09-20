import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import PlanetsList from '../../screens/PlanetsList';
import useAuthUser from '../../hooks/useAuthUser';

const Stack = createNativeStackNavigator();
function Roots() {
  const { isLoggedIn, loading } = useAuthUser();

  if (loading) {
    return null;
  }

  return (
    <Stack.Navigator>
      {!isLoggedIn && (
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
      {isLoggedIn && (
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
