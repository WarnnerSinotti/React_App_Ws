import React, { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';

export const MyModalize = () => {
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity onPress={onOpen}>
      <Text>Button</Text>
      </TouchableOpacity>

      <Modalize modalHeight={400} ref={modalizeRef}>
      <Text>Open the modal</Text>

        </Modalize>
    </>
  );
};