import React from 'react';
import {View as RNView} from 'react-native';

import styles from './Text.styles';

const View = ({children, style}) => {
  return <RNView style={[styles.view, style]}>{children}</RNView>;
};

export default View;
