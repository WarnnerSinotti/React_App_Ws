import React from 'react';

import { Container } from '../../components/Global';
import { MyHeader } from '../../components/Header';
import { MyButtonNavigation } from '../../components/ButtonNavigation';
import MyModal from '../../components/Modal';
import { MyModalize } from '../../components/Modalize';

export default function Menu() {
  const [visible, setVisible] = React.useState(false);

  return (
    <Container>
      <MyHeader onMenuPress={() => setVisible(true)} />
      <MyButtonNavigation />
      <MyModal visible={visible} onDismiss={() => setVisible(false)} />
      <MyModalize/>
    </Container>
  );
}
