import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Cases, Case, AddCase, AddDocuments } from '../screens';

const routes = [
  {
    name: 'CASES',
    label: 'Cases',
    component: Cases,
  },
  {
    name: 'CASE',
    label: 'Case',
    component: Case,
  },
  {
    name: 'ADD_CASE',
    label: 'Add Case',
    component: AddCase,
  },
  {
    name: 'ADD_DOCUMENTS',
    label: 'Add Documents',
    component: AddDocuments,
  },
];

const Stack = createNativeStackNavigator();

const CasesStack = () => {
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

export default CasesStack;