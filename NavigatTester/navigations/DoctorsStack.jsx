import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Doctors, Doctor } from '../screens';

const routes = [
  {
    name: 'Doctors',
    label: 'Doctors',
    component: Doctors,
  },
  {
    name: 'Doctor',
    label: 'Doctor',
    component: Doctor,
  },
];

const Stack = createNativeStackNavigator();

const DoctorsStack = () => {
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

export default DoctorsStack;