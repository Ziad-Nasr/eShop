import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Item from '../screens/Item/Item';
import Department from '../screens/Department/Department';

const routes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Department',
    component: Department,
  },
];

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      {routes.map(route => (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeStack;
