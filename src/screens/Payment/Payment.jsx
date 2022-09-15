import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  Modal,
  Animated,
  ScrollView,
} from 'react-native';
import BackArrow from '../../components/BackArrow/BackArrow';
import BlueBell from '../../components/BlueBell/BlueBell';
import {RadioButton} from 'react-native-paper';
import styles from './Payment.styles';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import Prices from '../../components/Prices/Prices';
import AddNew from '../../components/AddNew/AddNew';
import AddingWindow from '../AddingWindow/AddingWindow';
import {Modalize} from 'react-native-modalize';
import FormInput from '../../components/Form/FormInput';
import * as axios from '../../hooks/useAxios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from '../../components/Icon/Icon';
// import {configureStore} from '@reduxjs/toolkit';
// import {Provider} from 'react-redux';

const Payment = ({navigation}) => {
  const [modal, setModal] = React.useState(false);
  const [checked, setChecked] = React.useState('Mastercard');
  const [checkedNew, setCheckedNew] = React.useState('Mastercard');
  const [newCardName, setNewCardName] = React.useState('Mastercard');
  const [newCardNumber, setNewCardNumber] = React.useState('');
  const [axiosCardsList, setAxiosCardsList] = React.useState({});
  const modalizeRef = useRef(
    <Animated.AnimatedComponent>
      <ScrollView></ScrollView>
    </Animated.AnimatedComponent>,
  );

  // function counterReducer(state = initialState, action) {
  //   // Check to see if the reducer cares about this action
  //   if (action.type === 'counter/increment') {
  //     // If so, make a copy of `state`
  //     return {
  //       ...state,
  //       // and update the copy with the new value
  //       value: state.value + 1,
  //     };
  //   }
  //   // otherwise return the existing state unchanged
  //   return state;
  // }
  // const store = configureStore({reducer: counterReducer});


  const onOpen = () => {
    modalizeRef.current?.open();
  };
  const types = [
    {
      logo: require('../../assets/Mastercard.png'),
      name: 'Mastercard',
    },
    {
      logo: require('../../assets/apple.png'),
      name: 'Apple Pay',
    },
    {
      logo: require('../../assets/paypal.png'),
      name: 'Paypal',
    },
    {
      logo: require('../../assets/AmericanExpress.png'),
      name: 'American Express',
    },
    {
      logo: require('../../assets/visa.png'),
      name: 'Visa',
    },
  ];
  const cards = [
    {
      logo: require('../../assets/Mastercard.png'),
      name: 'Mastercard',
      number: '**** **** **** 4890',
    },
    {
      logo: require('../../assets/apple.png'),
      name: 'Apple Pay',
      number: '**** **** **** 4890',
    },
    {
      logo: require('../../assets/paypal.png'),
      name: 'Paypal',
      number: '**** **** **** 4890',
    },
    {
      logo: require('../../assets/AmericanExpress.png'),
      name: 'American Express',
      number: '**** **** **** 4890',
    },
    {
      logo: require('../../assets/visa.png'),
      name: 'Visa',
      number: '**** **** **** 4890',
    },
  ];

  const NewPayment = () => {
    const va = AsyncStorage.getItem('INPUT');
    // console.log(AsyncStorage.getItem('INPUT'));
    // newCardNumber = AsyncStorage.getItem('INPUT');
    console.log('va');
    console.log(va);
    console.log('va');
    let data = new FormData();

    data.append(newCardName, newCardNumber);
    axios
      .post('/Cards', data)
      .then(response => {
        // console.log(response.data);
      })
      .catch(error => {});
  };
  const paymentMethods = (key = null) => {
    let data = {};
    axios
      .get('/Cards', data)
      .then(response => {
        console.log(response.data);
        setAxiosCardsList(response.data);
      })
      .catch(error => {});
  };
  var cardData = [];
  cardData = paymentMethods();

  return (
    <View style={styles.body}>
      <View>
        <View style={styles.Header}>
          <BackArrow navigation={navigation} navigate={'Home'} />
          <Text style={styles.black}>Payment</Text>
          <BlueBell />
        </View>
        <View style={styles.Cards}>
          <FlatList
            data={cards}
            renderItem={({item}) => {
              return (
                <Pressable onPress={() => setChecked(item.name)}>
                  <View style={styles.card}>
                    <View style={styles.logoInfo}>
                      <View style={styles.whiteLogo}>
                        <Image source={item.logo} style={styles.logo} />
                      </View>
                      <View>
                        <Text style={[styles.black, {fontSize: 17}]}>
                          {item.name}
                        </Text>
                        <Text style={styles.secondary}>{item.number}</Text>
                      </View>
                    </View>
                    <RadioButton
                      status={checked === item.name ? 'checked' : 'unchecked'}
                      onPress={() => setChecked(item.name)}
                      color="#fe7052d6"
                    />
                  </View>
                  <View style={styles.horizontalLine}></View>
                </Pressable>
              );
            }}
          />
        </View>
        <View>
          <AddNew onPress={onOpen} />
        </View>
      </View>
      <View>
        <Prices />
        <View style={styles.OrangeButton}>
          <OrangeButton
            ButtonText="Confirm Payment"
            // onPress={() => axiosGet()}
            onPress={() => navigation.navigate('Shipment')}
          />
        </View>
      </View>
      <Modalize ref={modalizeRef} snapPoint={300} handlePosition="outside">
        <FlatList
          data={types}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={styles.CardNew}>
                <Pressable onPress={() => setNewCardName(item.name)}>
                  <Image source={item.logo} style={styles.logo} />

                  <RadioButton
                    status={newCardName === item.name ? 'checked' : 'unchecked'}
                    onPress={() => setNewCardName(item.name)}
                    color="#fe7052d6"
                  />
                </Pressable>
              </View>
            );
          }}
        />
        <View style={styles.form}>
          <FormInput placeholder="Card Number" />
        </View>
        {/* <FormInput placeholder="Pin" /> */}
        <View style={styles.NewCardSubmitContainer}>
          <TouchableOpacity style={styles.NewCardSubmit}>
            <Text onPress={NewPayment} style={styles.ButtonSubmit}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </Modalize>
      {/* <Icon name="youtube" size={55} color={'red'} /> */}
    </View>
  );
};

export default Payment;
