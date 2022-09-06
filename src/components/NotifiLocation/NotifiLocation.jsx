import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import OrangeButton from '../OrangeButton/OrangeButton';
import {useTranslation} from 'react-i18next';

import styles from './NotifiLocation.styles';

const NotifiLocation = props => {
  const {t} = useTranslation();

  return (
    <View style={styles.body}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={props.TopImage} style={styles.NotificationImage} />
          <Text style={styles.Title}>{t(props.Title)}</Text>
          <View>
            {console.log(props.SubTitle2)}
            <Text
              style={
                props.SubTitle2
                  ? styles.Text
                  : [styles.Text, {marginBottom: 15}]
              }>
              {t(props.SubTitle1)}
            </Text>
            <Text
              style={
                props.SubTitle2
                  ? [styles.Text, {marginBottom: 15}]
                  : {display: 'none'}
              }>
              {t(props.SubTitle2)}
            </Text>
          </View>
          <OrangeButton
            ButtonText={props.ButtonText}
            style={styles.OrangeBtn}
            Iconsrc={props.Iconsrc}
            onPress={props.onPress}
            navigation={props.navigation}
            navigate={props.Skip}
          />
          <TouchableOpacity
            style={styles.SkipContainer}
            onPress={() => props.navigation.navigate(props.Skip)}>
            <Text style={styles.Skip}>{t('Skip')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NotifiLocation;
