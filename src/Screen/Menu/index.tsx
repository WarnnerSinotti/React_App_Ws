import * as React from 'react';

import { Container, Row } from '../../components/Global';
import { MyText } from '../../components/Text';
import { MySubmit } from '../../components/Submit';
import { MyHeader } from '../../components/Header';


export default function Header(props: any) {

    return (
        <Container>
            <MyHeader/>
            <Row>
                <MyText>MENU</MyText>
            </Row>
            <Row>
                <MySubmit onPress={() => props.navigation.goBack()}>Voltar</MySubmit>
            </Row>
        </Container>
    )
}
