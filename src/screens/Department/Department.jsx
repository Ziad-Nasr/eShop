import React from 'react';
import {View, Text, Image} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import FormScan from '../../components/FormScan/FormScan';
import HorizSelect from '../../components/HorizSelect/HorizSelect';

import styles from './Department.styles';
//   preTextsrc={require('../../assets/loupe.png')}
//   placeholder="Search Products"

const name = [
  {
    name: 'All',
  },
  {
    name: 'Men',
  },
  {
    name: 'Women',
  },
  {
    name: 'Kids',
  },
  {
    name: 'Dogs',
  },
  {
    name: 'Electronics',
  },
];

const Department = () => {
  return (
    <View style={styles.body}>
      <View style={styles.Form}>
        <FormScan />
      </View>
      <HorizSelect data={name} />
      <View style={{paddingHorizontal: 20}}>
        <View
          style={{
            backgroundColor: '#14245b',
            borderRadius: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              padding: 10,
            }}>
            <View style={{}}>
              <Text style={styles.whiteText}>
                Get <Text style={styles.UniquePercent}>20%</Text> Off everything
              </Text>
              <Text style={[styles.secondary, styles.Code]}>
                With code: e-Shop004
              </Text>
            </View>
            <Image
              source={require('../../assets/FictionalCharacter.png')}
              style={styles.FinctionalCharacter}
            />
          </View>
        </View>
        <View style={styles.greyContainer}>

        </View>
      </View>
    </View>
  );
};

export default Department;
