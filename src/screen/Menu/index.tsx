import React, { useState } from 'react';

import { Container } from '../../components/Global';
import { MyHeader } from '../../components/Header';
import { MyButtonNavigation } from '../../components/ButtonNavigation';
import MyModal from '../../components/MyModal';


export default function Menu() {

  return (
    <Container>
      <MyHeader  />
      <MyButtonNavigation />
      <MyModal />
    </Container>
  );
}
