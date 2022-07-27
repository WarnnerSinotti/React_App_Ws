import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import { Modal, Text, Button } from 'react-native-paper';

const MyModal = (props: any, WarnnerProps) => {
  const [visible, setVisible] = React.useState(false);

  
  return (
    <>
      <Modal visible={visible} onDismiss={() => setVisible(false)}>
        <Text>Inserir as Listas do Modal</Text>
      </Modal>
      <Button onPress={() => setVisible(true)}>Show</Button>
    </>
  );
};

export default MyModal;
