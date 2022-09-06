import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import DropShadow from 'react-native-drop-shadow';

import styles from './HorizSelect.styles';

const HorizSelect = props => {
  const [currentName, setCurrentName] = React.useState('');
  return (
    <View style={{paddingStart: 20}}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        renderItem={({item}) => {
          return (
            <DropShadow style={styles.Shadow}>
              <TouchableOpacity
                style={[
                  styles.size,
                  currentName == item.name
                    ? {
                        backgroundColor: '#fe7052d6',
                        borderColor: '#fe7052d6',
                      }
                    : null,
                ]}
                onPress={() => setCurrentName(item.name)}>
                <Text
                  style={[
                    styles.sizetext,
                    currentName == item.name ? {color: 'white'} : null,
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            </DropShadow>
          );
        }}
      />
    </View>
  );
};

export default HorizSelect;
