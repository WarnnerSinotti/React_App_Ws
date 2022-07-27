import React from 'react';
import { Modal, Text, Button } from 'react-native-paper';

const MyModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <>
      <Modal visible={visible} onDismiss={hideModal}>
        <Text>Inserir as Listas do Modal</Text>
      </Modal>
      <Button onPress={showModal}>Show</Button>
    </>
  );
};

export default MyModal;
