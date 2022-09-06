import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
// options={{headerShown: false}}
import {BottomTab} from './bottomtab';

const tab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveCTintolor: 'gray',
      }}>
      {BottomTab.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarLabel: route.name,
            // tabBarIcon: () => <Ionicons name={route.icon} size={20} />,
            tabBarIcon: ({color, size}) => {
              return <Ionicons name={route.icon} color={color} size={size} />;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default tab;
// {
//   Navigations.map(route => (
//     <Stack.Screen
//       key={route.name}
//       name={route.name}
//       component={route.component}
//       options={{headerShown: false}}
//     />
//   ));
// }
