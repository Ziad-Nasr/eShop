import React from 'react';
import {View, Text} from 'react-native';

import styles from './Prices.styles';

const Prices = () => {
  return (
    <View>
      <View style={styles.Row}>
        <Text>Sub-total</Text>
        <Text style={styles.black}>188.00 $</Text>
      </View>
      <View style={styles.Row}>
        <Text>VAT (%)</Text>
        <Text style={styles.black}>0.00 $</Text>
      </View>
      <View style={styles.Row}>
        <Text>Shipping Charge</Text>
        <Text style={styles.black}>11.00 $</Text>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.Row}>
        <Text>Total</Text>
        <Text style={[styles.black, {fontSize: 20}]}>199.00 $</Text>
      </View>
    </View>
  );
};

export default Prices;
