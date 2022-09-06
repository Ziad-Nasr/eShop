import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './BackArrow.styles';

const BackArrow = props => {
  return (
    <TouchableOpacity
      style={styles.whiteCircleArrow}
      onPress={() => props.navigation.navigate(props.navigate)}>
      <Image
        source={require('../../assets/left-arrow.png')}
        style={styles.leftArrow}
      />
    </TouchableOpacity>
  );
};

export default BackArrow;
