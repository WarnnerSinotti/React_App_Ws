import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";
import { theme } from "../../core/theme";

export const MyHeader = (...props: any) => {
  
  const _goBack = () => props.navigation.navigate("Index");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={styles.tamanho} {...props}>
      <Appbar.Content title="MyPetWorld" />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  tamanho: {
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    backgroundColor: theme.colors.header,
    justifyContent: "center",
  },
});
