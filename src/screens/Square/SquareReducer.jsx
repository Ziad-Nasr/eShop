import React from 'react';
import {View, Text, Button} from 'react-native';

const reducer = (colorState, action) => {
  switch (action.Type) {
    case 'Change_R':
      return {...colorState, R: colorState.R + action.payload};
    case 'Change_G':
      return {...colorState, G: colorState.G + action.payload};
    case 'Change_B':
      return {...colorState, B: colorState.B + action.payload};
    default:
      return colorState;
  }
};

const Square = () => {
  //   const [Color, setColor] = React.useState({R: 0, G: 0, B: 0});
  const [Color, dispatch] = React.useReducer(reducer, {R: 0, G: 0, B: 0});
  return (
    <View>
      <Text>Red</Text>
      <Button
        title="More Red"
        onPress={() => {
          dispatch({Type: 'Change_R', payload: 15});
        }}
      />
      <Button
        title="Less Red"
        onPress={() => {
          dispatch({Type: 'Change_R', payload: -15});
        }}
      />
      <Text>Green</Text>
      <Button
        title="More Green"
        onPress={() => {
          dispatch({Type: 'Change_G', payload: 15});
        }}
      />
      <Button
        title="Less Green"
        onPress={() => {
          dispatch({Type: 'Change_G', payload: -15});
        }}
      />
      <Text>Blue</Text>
      <Button
        title="More Blue"
        onPress={() => {
          dispatch({Type: 'Change_B', payload: 15});
        }}
      />
      <Button
        title="Less Blue"
        onPress={() => {
          dispatch({Type: 'Change_B', payload: -15});
        }}
      />
      <View
        style={{
          marginVertical: 35,
          height: '50%',
          width: '100%',
          backgroundColor: `rgb(${Color.R}, ${Color.G}, ${Color.B})`,
        }}
      />
    </View>
  );
};

export default Square;
