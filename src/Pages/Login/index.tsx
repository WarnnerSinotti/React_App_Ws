import * as React from 'react';
import { View } from 'react-native';
import { Modal, Portal, Text, Button, Provider, Title, TextInput } from 'react-native-paper';
import { Container, RowContainer } from '../../components/Global';
import Login from '../../components/Login';
import { MyTextInput } from '../../components/TextInput';




export default function Index() {

    const [email, setEmail] = React.useState("");
    const [emailForget, setEmailForget] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [eyed, setEyed] = React.useState(true);
    const [visible, setVisible] = React.useState(false);

    const visualPassword = () => {
        setEyed(current => !current)
    }

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };
    {/* <Login />  */ }
    return (
        <Container>
            <Title > Login </Title>
            <RowContainer>
                <MyTextInput/>
                

            </RowContainer>
            <MyTextInput/>
                <MyTextInput/>
            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                    </Modal>
                </Portal>
                <Button style={{ marginTop: 150, backgroundColor: "000" }} onPress={showModal}>
                    Show
                </Button>
            </Provider>

        </Container>

    )
}
