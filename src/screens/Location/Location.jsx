import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NotifiLocation from '../../components/NotifiLocation/NotifiLocation';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import RNLocation from 'react-native-location';
const Location = ({navigation}) => {
  RNLocation.configure({
    distanceFilter: 5,
  });
  const [Permission, setPermission] = React.useState(false);

  const permissionHandle = async () => {
    var permission = await RNLocation.checkPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
      },
    });

    console.log('permission');
    console.log(permission);

    if (!permission) {
      permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      });
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
    } else {
      location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(location);
    }
    setPermission(permission);
    console.log(Permission);
  };
  // Geolocation.requestAuthorization();

  return (
    <View>
      {Permission ? (
        navigation.navigate('tab')
      ) : (
        <NotifiLocation
          TopImage={require('../../assets/topimage.png')}
          Title="AccLocation"
          SubTitle1="LocationSubTitle1"
          ButtonText="LocationButton"
          Skip="tab"
          Iconsrc={require('../../assets/location.png')}
          navigation={navigation}
          onPress={permissionHandle}
        />
      )}

      <Text>" "</Text>
    </View>
  );
};

export default Location;
