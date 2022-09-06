import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Profile } from '../screens';

const routes = [
  {
    name: 'Profile',
    label: 'Profile',
    component: Profile,
  },
];

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
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

export default ProfileStack;