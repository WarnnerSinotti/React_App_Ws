import * as React from 'react';

import { Container, RowContainer } from '../../components/Global';
import { MyText } from '../../components/Text';
import { MySubmit } from '../../components/Submit';
import { MyTextInput } from '../../components/TextInput';


export default function Cadastro(props: any) {

    return (
        <Container>
            <RowContainer>
                <MyText>Cadastro</MyText>
            </RowContainer>

            <RowContainer>
                <MyTextInput></MyTextInput>
            </RowContainer>

            <RowContainer>
                <MySubmit>Send</MySubmit>
            </RowContainer>

            <RowContainer>
                <MySubmit onPress={() => props.navigation.navigate('Index')}>Voltar</MySubmit>
            </RowContainer>
        </Container>
    )
}
