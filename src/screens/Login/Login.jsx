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
import {useDispatch, useSelector} from 'react-redux';
import {setUserData} from '../../redux/userReducer';
import * as axios from '../../hooks/useAxios';
const Login = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = React.useState(false);
  const [users, setUsers] = React.useState('');
  const dispatch = useDispatch();
  const email = useSelector(state => state.input);

  const login = () => {
    console.log('users');
    console.log(users.email);
    console.log('users');
    dispatch(
      setUserData({
        id: 1,
        name: 'Zoz',
      }),
      // console.log(users),
    );
    navigation.navigate('tab');
  };

  const dummyData = () => {
    console.log(email.name.payload);
    let data = {email: 'Cager@gmail.com'};
    axios
      .get('/Users', {id: 4})
      .then(response => {
        console.log('response');
        console.log('response.data.email');
        console.log(response.data);
        console.log('response.data.name');
        console.log(response.data[0].name);
        console.log(typeof response.data);

        setUsers(response.data);
        login();
      })
      .catch(error => {
        console.log(error);
      });

    // let dataTany = {
    //   email: 'Cager@gmail.com',
    //   password: '112233',
    //   name: 'Cager',
    // };
    // // console.log(dataTany);
    // axios
    //   .post('/Users', dataTany)
    //   .then(response => {
    //     console.log('Test');
    //     // console.log(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

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
          <OrangeButton ButtonText="Sign in" onPress={() => dummyData()} />
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
        <AltSignIn navigate={navigation} login={'home'} />
      </View>
    </View>
  );
};

export default Login;
