import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './FormInput.styles';
// import {Provider} from 'react-redux';
// import {store} from '../../screens/Payment/Payment';

const FormInput = ({
  placeholder,
  iconsrc,
  preTextsrc,
  secureTextEntry = false,
}) => {
  const [Input, setInput] = React.useState('');

  console.log(iconsrc);

  // let x = '../../assets/' + iconsrc;
  // console.log(x);
  function SendData(Data) {
    let {id} = Data;
    // console.log(Data);
    AsyncStorage.setItem('INPUT', Data);
  }

  return (
    // <Provider store={store}>
    <View style={styles.InputContainer}>
      {preTextsrc ? <Image source={preTextsrc} style={styles.Loupe} /> : null}
      <TextInput
        secureTextEntry={secureTextEntry}
        style={styles.Input}
        value={Input}
        placeholder={placeholder}
        onChangeText={newValue => {
          setInput(newValue);
          SendData(Input);
        }}
      />
      <Image source={iconsrc} style={styles.icon} />
    </View>
    // </Provider>
  );
};

export default FormInput;
