import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation/Roots';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
