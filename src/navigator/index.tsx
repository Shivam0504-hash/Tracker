import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screenNames } from './screenNames';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import ExpenseManagement from '../screens/expenseManagement';
import IncomeManagement from '../screens/incomeManagement';
import DetailsInsight from '../screens/detailsInsight';
import Expandin from '../screens/expandin';
import Datavisulization from '../screens/datavisulization';
import Search from '../screens/search';





const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.SplashScreen}>
        
        <Stack.Screen
          name={screenNames.SplashScreen}
          component={SplashScreen}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={screenNames.Home}
          component={Home}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={screenNames.ExpenseManagement}
          component={ExpenseManagement}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.IncomeManagement}
          component={IncomeManagement}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.DetailsInsight}
          component={DetailsInsight}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.Expandin}
          component={Expandin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.Datavisulization}
          component={Datavisulization}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={screenNames.Search}
          component={Search}
          options={{ headerShown: false }}
        />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;