import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import FormInput from '../Form/FormInput';

import styles from './FormScan.styles';

const FormScan = () => {
  return (
    <View style={styles.Form}>
      <FormInput
        preTextsrc={require('../../assets/loupe.png')}
        placeholder="Search Products"
      />
      <TouchableOpacity style={styles.scanBorder}>
        <Image source={require('../../assets/scan.png')} style={styles.scan} />
      </TouchableOpacity>
    </View>
  );
};

export default FormScan;
