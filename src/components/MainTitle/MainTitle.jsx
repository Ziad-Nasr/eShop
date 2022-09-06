import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './MainTitle.styles';
const MainTitle = () => {
  return (
    <View style={styles.MainTitleContainer}>
      <Image
        source={require('../../assets/frying-pan.png')}
        style={styles.logo}
      />
      <Text style={styles.MainTitle}>
        <Text style={styles.UniqueE}>e</Text>shop
      </Text>
    </View>
  );
};

export default MainTitle;
