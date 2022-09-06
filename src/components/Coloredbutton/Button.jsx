import React from 'react';
import {
  Image,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import styles from './Button.styles';



const Button = props => {
  return (
    <View style={{width: '46%'}}>
      <TouchableOpacity
        style={[styles.Button, {backgroundColor: props.backgroundColor}]}>
        {props.icon ? <Image source={props.icon} style={styles.icon} /> : null}
        <Text style={[styles.ButtonText, {color: props.color}]}>
          {props.placeholder}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
