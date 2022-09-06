import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { More, Phases, AddPhase, Stock } from '../screens';

const routes = [
  {
    name: 'MORE',
    label: 'More',
    component: More,
  },
  {
    name: 'PHASES',
    label: 'Phases',
    component: Phases,
  },
  {
    name: 'ADD_PHASE',
    label: 'Add Phase',
    component: AddPhase,
  },
  {
    name: 'STOCK',
    label: 'Stock',
    component: Stock,
  },
];

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator>
      {
        routes.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
            initialParams={{ name: route.name }}
            options={{ headerShown: false }}
          />
        ))
      }
    </Stack.Navigator>
  );
}

export default MoreStack;