import * as React from 'react';

import { Container, Row } from '../../components/Global';
import { MyText } from '../../components/Text';
import { MySubmit } from '../../components/Submit';


export default function Header(props: any) {

    return (
        <Container>
            <Row>
                <MyText>MENU</MyText>
            </Row>
            <Row>
                <MySubmit onPress={() => props.navigation.goBack()}>Voltar</MySubmit>
            </Row>
        </Container>
    )
}
