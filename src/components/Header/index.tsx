import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";
import { theme } from "../../styles/theme";

export const MyHeader = (...props: any) => {
  const Menu = () => {
    console.log("test");
  };

  return (
    <Appbar.Header style={styles.header} {...props}>
      <Appbar.Content title="MyPetWorld" />
      <Appbar.Action icon="dots-vertical" onPress={Menu} />
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
