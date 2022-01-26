/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import FindRecipes from './src/components/FindRecipes/FindRecipes';
import RecipeDetails from './src/components/RecipeDetails/RecipeDetails';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>

          <Stack.Navigator initialRouteName="FindRecipes"  screenOptions={{headerShown: false }}>
            <Stack.Screen name="FindRecipes" component={FindRecipes} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
          </Stack.Navigator>

      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
