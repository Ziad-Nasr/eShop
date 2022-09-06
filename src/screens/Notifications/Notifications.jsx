import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NotifiLocation from '../../components/NotifiLocation/NotifiLocation';
import OrangeButton from '../../components/OrangeButton/OrangeButton';
import {useTranslation} from 'react-i18next';

import styles from './Notifications.styles';

const Notifications = ({navigation}) => {
  const {t, i18n} = useTranslation();

  return (
    <View>
      <NotifiLocation
        TopImage={require('../../assets/notificationTopImage.png')}
        Title="Notification"
        SubTitle1="NotificationSubTitle1"
        SubTitle2="NotificationSubTitle2"
        ButtonText="EnableNotification"
        Skip="Location"
        navigation={navigation}
      />
    </View>
  );
};

export default Notifications;
