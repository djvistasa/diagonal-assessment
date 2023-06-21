import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import NavBar from '../components/navBar';
import MovieListing from '../screens/movieListing';
import { RootStackParamList } from './types';

function Router(): JSX.Element {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <NavBar {...props} />,
        }}
      >
        <Stack.Screen name="MovieListing" component={MovieListing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
