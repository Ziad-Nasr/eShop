import React from 'react';
import {View, Text, Image} from 'react-native';
import AddNew from '../../components/AddNew/AddNew';
import BackArrow from '../../components/BackArrow/BackArrow';
import BlueBell from '../../components/BlueBell/BlueBell';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import Prices from '../../components/Prices/Prices';
import {RadioButton} from 'react-native-paper';

import styles from './Shipment.styles';

const Shipment = ({navigation}) => {
  const [checked, setChecked] = React.useState('Mastercard');

  return (
    <View style={styles.body}>
      <View>
        <View style={styles.Header}>
          <BackArrow navigation={navigation} navigate={'Payment'} />
          <Text style={styles.HeadTitle}>Shipping Address</Text>
          <BlueBell />
        </View>
        <View style={styles.DeliveryOptions}>
          <View style={styles.DeliveryPickUp}>
            <RadioButton
              status={checked === 'Mastercard' ? 'checked' : 'unchecked'}
              onPress={() => setChecked(item.name)}
              color="#fe7052d6"
            />
            <Text>Home Delivery</Text>
          </View>
          <View style={styles.DeliveryPickUp}>
            <RadioButton
              status={checked === 'Mastercard' ? 'checked' : 'unchecked'}
              onPress={() => setChecked(item.name)}
              color="#fe7052d6"
            />
            <Text>Pick Up Point</Text>
          </View>
        </View>
        <View style={styles.Location}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/pin.png')}
              style={styles.pin}
            />
            <View>
              <Text style={styles.black}>4140 Parker Rd. Allentown</Text>
              <Text>Sylhet, Bangladesh</Text>
            </View>
          </View>
          <View>
            <RadioButton
              status={checked === 'Mastercard' ? 'checked' : 'unchecked'}
              onPress={() => setChecked(item.name)}
              color="#fe7052d6"
            />
            <Text style={styles.Link} onPress={() => console.log('Editted')}>
              Edit
            </Text>
          </View>
        </View>
        <AddNew />
      </View>
      <View>
        <View style={styles.Prices}>
          <Prices />
        </View>
        <View style={styles.OrangeButton}>
          <OrangeButton ButtonText="Continue" />
        </View>
      </View>
    </View>
  );
};

export default Shipment;
