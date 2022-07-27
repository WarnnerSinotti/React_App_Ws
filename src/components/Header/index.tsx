import React, { useEffect, useRef, useState } from "react";

import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { theme } from "../../styles/theme";


export const MyHeader = (props: any, warnner: any) => {
  return (
    <Appbar.Header style={styles.header} {...props}>
      <Appbar.Content title="MyPetWorld" />
      <Appbar.Action icon="dots-vertical" onPress={() => console.log('teste')} />
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
