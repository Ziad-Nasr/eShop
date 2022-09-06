import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './AddNew.styles';

const AddNew = props => {
  return (
    <TouchableOpacity style={styles.newCard} onPress={props.onPress}>
      <Text style={[styles.secondary, {fontSize: 15, fontWeight: '300'}]}>
        + Add New Card
      </Text>
    </TouchableOpacity>
  );
};

export default AddNew;
