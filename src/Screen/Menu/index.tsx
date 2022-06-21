import * as React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, RowContainer } from '../../components/Global';
import { MyText } from '../../components/Text';
import { MySubmit } from '../../components/Submit';


export default function Header(props:any) {

    return (
        <Container>
            <RowContainer>
                <MyText>MENU</MyText>
                
            </RowContainer>
            <RowContainer>
            <MySubmit onPress={() => props.navigation.goBack()}>Voltar</MySubmit>
            </RowContainer>
        </Container>
    )
}
