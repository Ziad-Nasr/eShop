import React from 'react';
import {View} from 'react-native';
import Button from '../Coloredbutton/Button';
import {Text} from '../../wrappers';

import styles from './AltSignIn.styles';
const AltSignIn = () => {
  return (
    <View>
      <View style={styles.LineContainer}>
        <View style={styles.Line}></View>
        <Text style={styles.black}>Or sign in with</Text>
        <View style={styles.Line}></View>
      </View>
      <View style={styles.BottomIconButtonContainer}>
        <Button
          placeholder="Facebook"
          display="Facebook"
          backgroundColor="#3B5998"
          color="#fff"
          icon={require('../../assets/facebook.png')}
        />
        <Button
          placeholder="Google"
          display="Google"
          backgroundColor="white"
          color="black"
          icon={require('../../assets/google.png')}
        />
      </View>
    </View>
  );
};

export default AltSignIn;
