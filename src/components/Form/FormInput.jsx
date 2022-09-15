import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './FormInput.styles';
import {useDispatch} from 'react-redux';
import {setInputData, setInputPassowrd} from '../../redux/inputReducer';

const FormInput = ({
  placeholder,
  iconsrc,
  preTextsrc,
  secureTextEntry = false,
}) => {
  const dispatch = useDispatch();

  const [Input, setInput] = React.useState('');

  console.log(iconsrc);

  // let x = '../../assets/' + iconsrc;
  // console.log(x);
  function SendData(Data) {
    let {id} = Data;
    // console.log(Data);
    dispatch(setInputData(Input));
  }

  return (
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
  );
};

export default FormInput;
