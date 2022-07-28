import React from 'react';
import { Modal, Text } from 'react-native-paper';

type ModalProps = {
  visible: boolean;
  onDismiss: () => void;
};

const MyModal = ({ visible, onDismiss }: ModalProps): JSX.Element => {
  return (
    <>
      <Modal visible={visible} onDismiss={onDismiss}>
        <Text>Inserir as Listas do Modal</Text>
      </Modal>
    </>
  );
};

export default MyModal;
