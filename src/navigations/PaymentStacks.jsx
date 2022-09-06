import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payment from '../screens/Payment/Payment';
import Shipment from '../screens/Shipment/Shipment';

const routes = [
  {
    name: 'Payment',
    component: Payment,
  },
  {
    name: 'Shipment',
    component: Shipment,
  },
];

const Stack = createNativeStackNavigator();

const PaymentStack = () => {
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

export default PaymentStack;
