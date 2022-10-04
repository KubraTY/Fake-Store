import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Products from './pages/Products';
import Pdetail from './pages/PDetail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Products Page"
          component={Products}
          options={{
            title: 'The Markt',
            headerStyle: {backgroundColor: '#fbe9e7'},
            headerTitleStyle: {color: '#dd2c00'},
          }}
        />
        <Stack.Screen
          name="Product Detail"
          component={Pdetail}
          options={{
            title: 'Product Detail',
            headerStyle: {backgroundColor: '#fbe9e7'},
            headerTitleStyle: {color: '#dd2c00'},
            headerTintColor: '#ff8a65',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
