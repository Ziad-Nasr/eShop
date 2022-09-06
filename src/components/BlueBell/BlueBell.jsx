import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import styles from './BlueBell.styles';

const BlueBell = () => {
  return (
    <TouchableOpacity style={styles.BlueCircle}>
      <Image
        style={styles.Bell}
        source={require('../../assets/notification.png')}
      />
    </TouchableOpacity>
  );
};

export default BlueBell;
