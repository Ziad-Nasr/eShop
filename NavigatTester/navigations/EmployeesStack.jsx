import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Employees, Employee } from '../screens';

const routes = [
  {
    name: 'Employees',
    label: 'Employees',
    component: Employees,
  },
  {
    name: 'Employee',
    label: 'Employee',
    component: Employee,
  },
];

const Stack = createNativeStackNavigator();

const EmployeesStack = () => {
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

export default EmployeesStack;