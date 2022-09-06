import React from 'react';
import {View, Text, Button} from 'react-native';

const reducer = (counter, action) => {
  switch (action.type) {
    case 'increase':
      return {...counter, Count: counter.Count + action.payload};
    case 'decrease':
      return {...counter, Count: counter.Count + action.payload};
    default:
      return counter;
  }
};

const CounterScreen = () => {
  const [counter, dispatch] = React.useReducer(reducer, {Count: 0});
  return (
    <View
      style={{
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#23223f',
      }}>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({type: 'increase', payload: 1});
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({type: 'decrease', payload: -1});
        }}
      />
      <Text style={{color: 'white'}}>Current Count: {counter.Count}</Text>
    </View>
  );
};

export default CounterScreen;
