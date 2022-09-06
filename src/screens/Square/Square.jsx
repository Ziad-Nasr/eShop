import React from 'react';
import {View, Text, Button} from 'react-native';

const Square = () => {
  //   const [Red, setRed] = React.useState(0);
  //   const [Green, setGreen] = React.useState(0);
  //   const [Blue, setBlue] = React.useState(0);
  const [Color, setColor] = React.useState({R: 0, G: 0, B: 0});
  //   console.log(Color);
  return (
    <View>
      <Text>Red</Text>
      <Button
        title="More Red"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, R: Color.R + 15};
          });
        }}
      />
      <Button
        title="Less Red"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, R: Color.R - 15};
          });
        }}
      />
      <Text>Green</Text>
      <Button
        title="More Green"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, G: Color.G + 15};
          });
        }}
      />
      <Button
        title="Less Green"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, G: Color.G - 15};
          });
        }}
      />
      <Text>Blue</Text>
      <Button
        title="More Blue"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, B: Color.B + 15};
          });
        }}
      />
      <Button
        title="Less Blue"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, B: Color.B - 15};
          });
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
      <Button
        title="Tester"
        onPress={() => {
          setColor(PrevState => {
            return {...PrevState, B: Color.B + 15};
          });
        }}
      />
    </View>
  );
};

export default Square;
