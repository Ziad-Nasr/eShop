import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payment from '../screens/Payment/Payment';
import Item from '../screens/Item/Item';

const routes = [
  {
    name: 'Item',
    component: Item,
  },
];

const Stack = createNativeStackNavigator();

const ItemStack = () => {
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

export default ItemStack;
