import React from 'react';
import {Text as RNText} from 'react-native';

import styles from './Text.styles';

const Text = ({children, style}) => {
  return <RNText style={[styles.text, style]}>{children}</RNText>;
};

export default Text;
