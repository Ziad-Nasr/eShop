import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import styles from './OrangeButton.styles';

const OrangeButton = props => {
  const {t} = useTranslation();
  function PressedBtn() {}
  console.log(props.Iconsrc);
  return (
    <DropShadow style={styles.Shadow}>
      <View>
        <TouchableOpacity style={styles.Register} onPress={props.onPress}>
          <Image
            source={props.Iconsrc}
            style={props.Iconsrc ? styles.Pin : {display: 'none'}}
          />
          <Text style={styles.RegisterText}>{t(props.ButtonText)}</Text>
        </TouchableOpacity>
      </View>
    </DropShadow>
  );
};

export default OrangeButton;
