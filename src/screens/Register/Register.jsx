import React from 'react';
import {View, Text} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import MainTitle from '../../components/MainTitle/MainTitle';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import AltSignIn from '../../components/AltSignIn/AltSignIn';

import styles from './Register.styles';

const Register = ({navigation}) => {
  return (
    <View style={styles.body}>
      <View>
        <MainTitle />
        <Text style={styles.Title}>Create a new account</Text>
        <Text style={styles.PostTitleInfo}>
          Please put your information below to create a new account for using
          app.
        </Text>
        <View style={styles.Forms}>
          <FormInput placeholder="Full Name" />
        </View>
        <View style={styles.Forms}>
          <FormInput
            placeholder="Email"
            iconsrc={require('../../assets/check.png')}
          />
        </View>
        <View style={styles.Forms}>
          <FormInput
            placeholder="Password"
            iconsrc={require('../../assets/eye.png')}
            style={styles.Forms}
          />
        </View>
        <View style={styles.OrangeBtnJoin}>
          <OrangeButton ButtonText="Register Now" />
          <View style={styles.JoinNow}>
            <Text style={styles.black}>
              Already have an account?{' '}
              <Text
                style={styles.Link}
                onPress={() => navigation.navigate('Login')}>
                Join now
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <AltSignIn />
    </View>
  );
};

export default Register;


// https://us04web.zoom.us/j/79291061882?pwd=xphchb2dsP8MnAyef1TO8gktqmSdl7.1#success