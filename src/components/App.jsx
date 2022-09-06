import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Modalize} from 'react-native-modalize';

export const App = () => {
  const modalizeRef = useRef(<Modalize></Modalize>);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <Modalize ref={modalizeRef}>
        <Text style={{color: 'black'}}>...your content</Text>
      </Modalize>
      <TouchableOpacity onPress={onOpen}>
        <Text>Open the modal</Text>
      </TouchableOpacity>
    </>
  );
};
