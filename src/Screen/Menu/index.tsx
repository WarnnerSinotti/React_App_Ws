import * as React from "react";

import { Container } from "../../components/Global";
import { MyHeader } from "../../components/Header";
import { MyButtonNavigation } from "../../components/ButtonNavigation";

export default function Header(props: any) {
  return (
    <Container>
      <MyHeader />
      <MyButtonNavigation />
    </Container>
  );
}
