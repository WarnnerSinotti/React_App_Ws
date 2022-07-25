import * as React from "react";
import { StyleSheet, TouchableOpacity,  } from "react-native";
import { Appbar, } from "react-native-paper";
import { theme } from "../../styles/theme";
import { Modalize } from 'react-native-modalize';
import { MyText } from "../Text";

export const MyHeader = (...props: any) => {
  
  const modalizeRef = React.useRef<Modalize>(null);

  const onOpen = () => {
    modalizeRef.current?.open();
    console.log('modalize')
  };


  return (
    <Appbar.Header style={styles.header} {...props}>
      <Appbar.Content title="MyPetWorld" />
      <Appbar.Action icon="dots-vertical" onPress={onOpen} />


      <Modalize ref={modalizeRef}>
        <MyText>oi</MyText>
      </Modalize>

    </Appbar.Header>

    
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    backgroundColor: theme.colors.header,
    justifyContent: "center",
  },
});
