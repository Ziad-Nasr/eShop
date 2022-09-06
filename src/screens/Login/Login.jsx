import {Link} from '@react-navigation/native';
import React from 'react';
import {View, Linking, Image} from 'react-native';
import FormInput from '../../components/Form/FormInput';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import Button from '../../components/Coloredbutton/Button';
import styles from './Login.styless';
import CheckBox from '@react-native-community/checkbox';
import MainTitle from '../../components/MainTitle/MainTitle';
import AltSignIn from '../../components/AltSignIn/AltSignIn';
import {Text} from '../../wrappers';

const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  return (
    <View style={styles.LoginContainer}>
      {/* <View style={styles.MainTitleContainer}> */}
      <View>
        <MainTitle />
        <Text style={styles.Title}>
          Welcome to <Text style={styles.UniqueE}>e</Text>Shop
        </Text>
        <Text style={styles.PostTitleInfo}>
          Please enter your address below to start using the app.
        </Text>
        <View style={styles.Forms}>
          <View>
            <View style={styles.EmailForm}>
              <FormInput
                placeholder="Email"
                // style={styles.Email}
                iconsrc={require('../../assets/check.png')}
              />
            </View>
            <View style={styles.PasswordForm}>
              <FormInput
                placeholder="Password"
                iconsrc={require('../../assets/eye.png')}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.CheckBoxForget}>
              <View style={styles.CheckBox}>
                <CheckBox
                  id="CheckBox"
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={newValue => setToggleCheckBox(newValue)}
                  onCheckColor={'#000'}
                  tintColor={{toggleCheckBox} ? '#000' : 'fff'}
                />
                <Text htmlfor="CheckBox">Remember me</Text>
              </View>
              <Text style={styles.Link}>Forgot Password?</Text>
            </View>
          </View>
        </View>
        <View>
          <OrangeButton ButtonText="Sign in" />
          <View style={styles.OrangeBtn}>
            <Text style={styles.black}>
              Not a memebr?
              <Text
                style={styles.Link}
                onPress={() => navigation.navigate('Register')}>
                Join now
              </Text>
            </Text>
          </View>
        </View>
      </View>
      <View>
        <AltSignIn />
      </View>
    </View>
  );
};

export default Login;
