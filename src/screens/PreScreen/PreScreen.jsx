import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {App} from '../../components/App';
import i18n from '../../i18n/i18next';
import {useTranslation} from 'react-i18next';
import styles from './PreScreen.styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PreScreen = ({navigation}) => {
  const {t, i18n} = useTranslation();
  return (
    <View style={styles.preScreen}>
      {/* <Text style={styles.Texter}>Tester</Text>
      <Text>Tester</Text> */}
      <View style={styles.SkipContainer}>
        <TouchableOpacity
          style={styles.SkipBorder}
          onPress={() =>
            i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
          }>
          <Text style={styles.Skip}>{t('Locale')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SkipBorder}
          onPress={() => navigation.navigate('Notifications')}>
          <Text style={styles.Skip}>{t('Skip')}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TitleContainer}>
        <View>
          <View style={styles.mainTitle}>
            <Image
              style={styles.logoOrange}
              source={require('../../assets/frying-panOrange.png')}
            />
            <Text style={styles.Title}>
              <Text style={styles.UniqueE}>{t('e')}</Text>
              {t('shop')}
            </Text>
          </View>
          <Text style={styles.Slogan}>
            {t('slogan')} <Text style={styles.UniqueE}>{t('e')}</Text>
            {t('shop')}
          </Text>
        </View>
      </View>

      <View style={styles.BottomButtonsContainer}>
        <TouchableOpacity
          style={styles.Register}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.RegisterText}>{t('register')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Login}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.LoginText}>{t('sign')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreScreen;
