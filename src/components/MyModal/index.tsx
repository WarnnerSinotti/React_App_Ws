import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal, List } from 'react-native-paper';
import { theme } from '../../styles/theme';

type ModalProps = {
  visible: boolean;
  onDismiss: () => void;
};

const MyModal = (
  { visible, onDismiss }: ModalProps,
  props: any,
): JSX.Element => {
  return (
    <>
      <Modal visible={visible} onDismiss={onDismiss} >
        <List.Section>
          <List.Subheader style={styles.list} >
            Settings
          </List.Subheader>
          <List.Item style={styles.list}  theme={theme}
            title="Cadastro"
            right={props => <List.Icon color={styles.icon.color} icon="file" />}
            onPress={()=> console.log('Cadastro')}
          />
          <List.Item style={styles.list} theme={theme}
            title="Menu"
            right={props => <List.Icon color={styles.icon.color} icon="menu" />}
            onPress={()=> console.log('Menu')}
          />
          <List.Item style={styles.list} theme={theme}
            title="Logout"
            right={props => <List.Icon color={styles.icon.color} icon="logout" />}
            onPress={()=> console.log('Logout')}
          />
        </List.Section>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    color: theme.colors.text,
    backgroundColor: theme.colors.modal,
    textAlign: 'center',
    fontSize: 20
    
  },
  icon: {
    color: theme.colors.text,
  }
});

export default MyModal;
