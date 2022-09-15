import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import PreScreen from './src/screens/PreScreen/PreScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import {Provider} from 'react-redux';
import {Navigations} from './src/navigations';
import tab from './src/navigations/tab';
import store from './src/redux/store';
export default function Main() {
  const Stack = createNativeStackNavigator();
  // const Tab = createBottomTabNavigator();
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            {Navigations.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
                options={{headerShown: false}}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  textStylee: {
    backgroundColor: '#14245b',
    height: '100%',
  },
});
