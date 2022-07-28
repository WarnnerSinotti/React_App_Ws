import React from 'react';
import { Modal, List } from 'react-native-paper';

type ModalProps = {
  visible: boolean;
  onDismiss: () => void;
};

const MyModal = ({ visible, onDismiss }: ModalProps): JSX.Element => {
  return (
    <>
      <Modal visible={visible} onDismiss={onDismiss}>
        <List.Section>
          <List.Subheader>Settings</List.Subheader>
          <List.Item
            title="First Item"
            left={() => <List.Icon icon="folder" />}
          />
          <List.Item
            title="Second Item"
            left={() => <List.Icon color={'black'} icon="folder" />}
          />
        </List.Section>
      </Modal>
    </>
  );
};

export default MyModal;
